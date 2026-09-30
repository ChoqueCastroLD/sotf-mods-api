/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_ViewInputs */

const en_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View the page`)
};

const es_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver la página`)
};

const de_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite ansehen`)
};

const fr_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la page`)
};

const it_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi la pagina`)
};

const nl_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina bekijken`)
};

const pl_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz stronę`)
};

const pt_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver a página`)
};

const ru_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу`)
};

const sv_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa sidan`)
};

const tr_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı gör`)
};

const zh_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看页面`)
};

const ja_upload_success_view = /** @type {(inputs: Upload_Success_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを見る`)
};

/**
* | output |
* | --- |
* | "View the page" |
*
* @param {Upload_Success_ViewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_view = /** @type {((inputs?: Upload_Success_ViewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_ViewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_view(inputs)
	if (locale === "de") return de_upload_success_view(inputs)
	if (locale === "fr") return fr_upload_success_view(inputs)
	if (locale === "it") return it_upload_success_view(inputs)
	if (locale === "nl") return nl_upload_success_view(inputs)
	if (locale === "pl") return pl_upload_success_view(inputs)
	if (locale === "pt") return pt_upload_success_view(inputs)
	if (locale === "ru") return ru_upload_success_view(inputs)
	if (locale === "sv") return sv_upload_success_view(inputs)
	if (locale === "tr") return tr_upload_success_view(inputs)
	if (locale === "zh") return zh_upload_success_view(inputs)
	if (locale === "ja") return ja_upload_success_view(inputs)
	return en_upload_success_view(inputs)
});
