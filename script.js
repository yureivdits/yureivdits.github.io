/* ================================================
   ESTE ARQUIVO CONTÉM APENAS ESTRUTURA/LAYOUT.
   Cores, fontes e identidade visual virão depois.
   ================================================ */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* ---------- 1. PERFIL ---------- */

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  gap: 12px;
}

.profile__photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.profile__name {
  margin: 0;
}

.profile__bio {
  max-width: 500px;
  margin: 0;
}

.profile__socials {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

/* ---------- SEÇÕES (título comum) ---------- */

.section-title {
  text-align: center;
  margin: 0 0 24px 0;
}

/* ---------- 2. PORTFÓLIO / CARROSSEL ---------- */

.portfolio {
  padding: 40px 20px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.carousel__track {
  position: relative;
  width: 100%;
  max-width: 640px;
  overflow: hidden;
}

.carousel__item {
  display: none;
  flex-direction: column;
  gap: 8px;
}

.carousel__item.is-active {
  display: flex;
}

.carousel__video {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* proporção 16:9 */
}

.carousel__video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.carousel__caption {
  text-align: center;
  margin: 0;
}

.carousel__arrow {
  flex-shrink: 0;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 24px;
  padding: 8px 12px;
}

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid currentColor;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.carousel__dot.is-active {
  background: currentColor;
}

/* ---------- 3. TABELA DE PREÇOS ---------- */

.pricing {
  padding: 40px 20px;
}

.pricing__table {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-collapse: collapse;
}

.pricing__table th,
.pricing__table td {
  border: 1px solid currentColor;
  padding: 12px;
  text-align: left;
}

/* ---------- RESPONSIVO (mobile) ---------- */

@media (max-width: 600px) {
  .carousel {
    gap: 8px;
  }

  .carousel__arrow {
    font-size: 18px;
    padding: 4px 6px;
  }

  .pricing__table,
  .pricing__table thead,
  .pricing__table tbody,
  .pricing__table th,
  .pricing__table td,
  .pricing__table tr {
    display: block;
  }

  .pricing__table thead {
    display: none;
  }

  .pricing__table tr {
    margin-bottom: 16px;
    border: 1px solid currentColor;
  }

  .pricing__table td {
    border: none;
    border-bottom: 1px solid currentColor;
  }

  .pricing__table td:last-child {
    border-bottom: none;
  }
}
