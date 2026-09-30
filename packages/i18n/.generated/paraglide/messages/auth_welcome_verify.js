/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Auth_Welcome_VerifyInputs */

const en_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We sent a verification link to ${i?.email}. Open it to start commenting, reviewing and uploading.`)
};

const es_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hemos enviado un enlace de verificación a ${i?.email}. Ábrelo para empezar a comentar, reseñar y subir mods.`)
};

const de_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wir haben einen Bestätigungslink an ${i?.email} geschickt. Öffne ihn, um zu kommentieren, zu rezensieren und hochzuladen.`)
};

const fr_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nous avons envoyé un lien de vérification à ${i?.email}. Ouvrez-le pour commenter, donner votre avis et publier.`)
};

const it_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abbiamo inviato un link di verifica a ${i?.email}. Aprilo per iniziare a commentare, recensire e caricare.`)
};

const nl_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We hebben een bevestigingslink naar ${i?.email} gestuurd. Open hem om te reageren, te recenseren en te uploaden.`)
};

const pl_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysłaliśmy link weryfikacyjny na adres ${i?.email}. Otwórz go, aby komentować, recenzować i wgrywać mody.`)
};

const pt_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviamos um link de confirmação para ${i?.email}. Abra-o para começar a comentar, avaliar e enviar mods.`)
};

const ru_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Мы отправили ссылку для подтверждения на ${i?.email}. Откройте её, чтобы комментировать, писать отзывы и загружать моды.`)
};

const sv_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vi har skickat en bekräftelselänk till ${i?.email}. Öppna den för att börja kommentera, recensera och ladda upp.`)
};

const tr_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} adresine bir doğrulama bağlantısı gönderdik. Yorum yapmaya, inceleme yazmaya ve yüklemeye başlamak için bağlantıyı aç.`)
};

const zh_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`我们已向 ${i?.email} 发送验证链接。打开链接后即可评论、写评测和上传模组。`)
};

const ja_auth_welcome_verify = /** @type {(inputs: Auth_Welcome_VerifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} に確認用リンクを送りました。リンクを開くと、コメント、レビュー、アップロードができるようになります。`)
};

/**
* | output |
* | --- |
* | "We sent a verification link to {email}. Open it to start commenting, reviewing and uploading." |
*
* @param {Auth_Welcome_VerifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_welcome_verify = /** @type {((inputs: Auth_Welcome_VerifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Welcome_VerifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_welcome_verify(inputs)
	if (locale === "de") return de_auth_welcome_verify(inputs)
	if (locale === "fr") return fr_auth_welcome_verify(inputs)
	if (locale === "it") return it_auth_welcome_verify(inputs)
	if (locale === "nl") return nl_auth_welcome_verify(inputs)
	if (locale === "pl") return pl_auth_welcome_verify(inputs)
	if (locale === "pt") return pt_auth_welcome_verify(inputs)
	if (locale === "ru") return ru_auth_welcome_verify(inputs)
	if (locale === "sv") return sv_auth_welcome_verify(inputs)
	if (locale === "tr") return tr_auth_welcome_verify(inputs)
	if (locale === "zh") return zh_auth_welcome_verify(inputs)
	if (locale === "ja") return ja_auth_welcome_verify(inputs)
	return en_auth_welcome_verify(inputs)
});
