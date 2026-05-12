# Kişisel Web Sayfası

## Proje Adı
Kişisel Web Sayfası (Bulut Bilişim Dersi Ödevi-2)

## Öğrenci Adı - Öğrenci Numera
Sara Ebrahimi - 22331817 

## Not: Bu proje, hocanın isteğine ek olarak React kullanılarak geliştirildiği için, hocanın taleplerine uygun ayrı bir projeyi de bu projenin içinde proje dizininde hazırlamaya karar verdim. Bu nedenle ilgili dizinde açıklamalar ve oldukça basit bir Dockerfile ile birlikte sade bir tasarım bulunmaktadır. Ayrıca proje kök dizininde, açıklamalar ve Dockerfile (Nginx web proxy yapılandırması dahil) ile birlikte React kullanılarak hazırlanmış daha gelişmiş bir tasarım da yer almaktadır. Kısacası, bu projede iki farklı tasarım ve iki farklı seviyede Dockerfile yapısı bulabilirsiniz.

basit design(/proje directory):
<img width="1920" height="1080" alt="BulutBili-imDersi_-dev2-vanilaHTML-CSS" src="https://github.com/user-attachments/assets/90ea090a-0565-4490-81eb-7118d7b27016" />


## Kullanılan Teknolojiler
- HTML5 & CSS3 (Projenin statik ana iskeleti)
- Docker & Nginx (Sunucu ve container altyapısı)
- React & Vite (Sadece yapay zeka platformu AI Studio üzerindeki interaktif önizleme arayüzü için geliştirme ortamı olarak kullanılmıştır)
- Tailwind CSS & Framer Motion (Önizleme sayfasındaki görsel tasarım ve animasyonlar)

## Docker Çalıştırma Komutları
Öncelikle projenin bulunduğu dizinde terminali açın ve Docker image'ını oluşturmak için aşağıdaki komutu çalıştırın:
```bash
docker build -t webproje .
```

<img width="1671" height="595" alt="build-docker" src="https://github.com/user-attachments/assets/a551edf8-e2be-4e2c-9fe7-a5cf343edf96" />


Docker container'ını arka planda (detached mode) çalıştırmak ve 8080 portuna yönlendirmek için:
```bash
docker run -d -p 8080:80 webproje
```

<img width="685" height="47" alt="run-docker" src="https://github.com/user-attachments/assets/5be59c66-88cb-4246-9d65-49b32b29f734" />
<img width="1270" height="67" alt="BulutBili-imDersi_-dev2-dockerfiletest" src="https://github.com/user-attachments/assets/cbd1dc68-3d2b-4027-8c04-90759b27cfb6" />


Container çalıştıktan sonra web sayfasına tarayıcınızdan şu linke giderek ulaşabilirsiniz: 
[http://localhost:8080](http://localhost:8080):

react tasarim:
<img width="1920" height="1080" alt="BulutBili-imDersi_-dev2-React" src="https://github.com/user-attachments/assets/d6c91004-cd54-42ff-b7bb-786c24cdadf8" />


## Proje Mimarisi ve Çalışma Mantığı
Bu teslim edilen proje (`proje` klasörü içindeki dosyalar), **HTML5** ve **CSS3** ile geliştirilmiş saf, statik web teknolojilerini içermektedir. HTML dosyası (`index.html`) web sayfasının iskeletini ve içeriğini barındırırken, CSS dosyası (`style.css`) görsel tasarımını yönetmektedir.

Proje, internet üzerinde güvenilir bir şekilde yayınlanabilmek (hosting) için konteyner mimarisi olan **Docker** kullanılarak paketlenmiştir:
- **Dockerfile** içerisinde sistemin **Nginx** adlı yüksek performanslı web sunucu imajı (`nginx:latest`) üzerine kurulacağı belirtilmiştir. Nginx varsayılan olarak `80` portunda çalışır.
- Konteyner oluşturulduğunda projedeki tüm dosyalar Nginx'in otomatik yayın klasörüne kopyalanarak erişime hazır duruma getirilir.
- `docker run -p 8080:80` komutu, bilgisayarınızın `8080` portunu konteyner içindeki `80` portuna *(Nginx)* yönlendirir. Böylece proje bağımsız ve sorunsuz bir şekilde her ortamda çalışabilir.

**React Mimarisi (Mevcut Görsel Arayüz):**
Bu ekranda gördüğünüz animasyonlu ve etkileşimli önizleme ortamı **React** kullanılarak inşa edilmiştir:
- **Bileşen (Component) Yapısı:** Tüm arayüz (butonlar, kartlar, arka plan), bağımsız ve parçalanabilir React modüllerinden/bileşenlerinden oluşur.
- **Sanal DOM (Virtual DOM):** DOM manipülasyonu yerine Virtual DOM kullanılarak sadece sayfanın gerekli yerlerinin render edilmesi sağlanmıştır.
- **Modern Animasyonlar:** Ekranda süzülen geometrik şekiller ve yumuşak sayfa geçişleri, React tabanlı `framer-motion` kütüphanesi yardımıyla tasarlanmıştır. CSS'e kıyasla çok boyutlu ve karmaşık animasyonlar optimize bir şekilde çalıştırılır.
 *(Not: Ödevin esas teslim kısmı saf HTML/CSS dosyaları olup, React sadece bu etkileşimli sunum alanı için kurgulanmıştır.)*

## Projenin Kısa Açıklaması
Bu proje, Bulut Bilişim dersi ödevi kapsamında hazırlanmış basit bir kişisel web sayfasıdır. Hazırlanan dosyaların bir Docker container içerisine alınıp Nginx web sunucusu ile yayınlanması hedeflenmiştir. Proje dosyaları ayrıca versiyon kontrolü için GitHub'a yüklenecek ve GitHub Pages üzerinden de yayınlanacaktır.

Değerli hocama ilgisi ve emekleri için teşekkür ederim.
