/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Slug_PreviewInputs */

const en_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your listing will live at`)
};

const es_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu ficha estará en`)
};

const de_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Eintrag wird hier zu finden sein:`)
};

const fr_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre fiche sera ici :`)
};

const it_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua scheda sarà su`)
};

const nl_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je vermelding komt op`)
};

const pl_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój wpis będzie pod adresem`)
};

const pt_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua ficha ficará em`)
};

const ru_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша карточка будет по адресу`)
};

const sv_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din sida kommer att finnas på`)
};

const tr_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın adresi:`)
};

const zh_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的页面地址将是`)
};

const ja_upload_slug_preview = /** @type {(inputs: Upload_Slug_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページのアドレス：`)
};

/**
* | output |
* | --- |
* | "Your listing will live at" |
*
* @param {Upload_Slug_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_slug_preview = /** @type {((inputs?: Upload_Slug_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Slug_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_slug_preview(inputs)
	if (locale === "de") return de_upload_slug_preview(inputs)
	if (locale === "fr") return fr_upload_slug_preview(inputs)
	if (locale === "it") return it_upload_slug_preview(inputs)
	if (locale === "nl") return nl_upload_slug_preview(inputs)
	if (locale === "pl") return pl_upload_slug_preview(inputs)
	if (locale === "pt") return pt_upload_slug_preview(inputs)
	if (locale === "ru") return ru_upload_slug_preview(inputs)
	if (locale === "sv") return sv_upload_slug_preview(inputs)
	if (locale === "tr") return tr_upload_slug_preview(inputs)
	if (locale === "zh") return zh_upload_slug_preview(inputs)
	if (locale === "ja") return ja_upload_slug_preview(inputs)
	return en_upload_slug_preview(inputs)
});
