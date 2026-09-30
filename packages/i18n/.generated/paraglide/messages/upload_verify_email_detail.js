/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Verify_Email_DetailInputs */

const en_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the link we sent you, then come back: your draft will be waiting.`)
};

const es_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre el enlace que te enviamos y vuelve: tu borrador te estará esperando.`)
};

const de_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne den Link, den wir dir geschickt haben, und komm zurück: Dein Entwurf wartet.`)
};

const fr_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez le lien que nous vous avons envoyé puis revenez : votre brouillon vous attend.`)
};

const it_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il link che ti abbiamo inviato e torna qui: la tua bozza ti aspetta.`)
};

const nl_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open de link die we je stuurden en kom terug: je concept wacht op je.`)
};

const pl_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz link, który ci wysłaliśmy, i wróć: szkic będzie czekał.`)
};

const pt_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o link que enviamos e volte: seu rascunho estará esperando.`)
};

const ru_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте ссылку из письма и возвращайтесь: черновик вас дождётся.`)
};

const sv_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna länken vi skickade och kom tillbaka: ditt utkast väntar.`)
};

const tr_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderdiğimiz bağlantıyı aç ve geri dön: taslağın seni bekliyor.`)
};

const zh_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开我们发给你的链接再回来，草稿会一直等你。`)
};

const ja_upload_verify_email_detail = /** @type {(inputs: Upload_Verify_Email_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信したリンクを開いてから戻ってきてください。下書きはそのまま残っています。`)
};

/**
* | output |
* | --- |
* | "Open the link we sent you, then come back: your draft will be waiting." |
*
* @param {Upload_Verify_Email_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_verify_email_detail = /** @type {((inputs?: Upload_Verify_Email_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Verify_Email_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_verify_email_detail(inputs)
	if (locale === "de") return de_upload_verify_email_detail(inputs)
	if (locale === "fr") return fr_upload_verify_email_detail(inputs)
	if (locale === "it") return it_upload_verify_email_detail(inputs)
	if (locale === "nl") return nl_upload_verify_email_detail(inputs)
	if (locale === "pl") return pl_upload_verify_email_detail(inputs)
	if (locale === "pt") return pt_upload_verify_email_detail(inputs)
	if (locale === "ru") return ru_upload_verify_email_detail(inputs)
	if (locale === "sv") return sv_upload_verify_email_detail(inputs)
	if (locale === "tr") return tr_upload_verify_email_detail(inputs)
	if (locale === "zh") return zh_upload_verify_email_detail(inputs)
	if (locale === "ja") return ja_upload_verify_email_detail(inputs)
	return en_upload_verify_email_detail(inputs)
});
