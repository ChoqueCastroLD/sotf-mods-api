/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_View_PublicInputs */

const en_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View public page`)
};

const es_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página pública`)
};

const de_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentliche Seite ansehen`)
};

const fr_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la page publique`)
};

const it_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi la pagina pubblica`)
};

const nl_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbare pagina bekijken`)
};

const pl_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz stronę publiczną`)
};

const pt_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página pública`)
};

const ru_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть публичную страницу`)
};

const sv_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa offentlig sida`)
};

const tr_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık sayfayı gör`)
};

const zh_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看公开页面`)
};

const ja_kits_view_public = /** @type {(inputs: Kits_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開ページを見る`)
};

/**
* | output |
* | --- |
* | "View public page" |
*
* @param {Kits_View_PublicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_view_public = /** @type {((inputs?: Kits_View_PublicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_View_PublicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_view_public(inputs)
	if (locale === "de") return de_kits_view_public(inputs)
	if (locale === "fr") return fr_kits_view_public(inputs)
	if (locale === "it") return it_kits_view_public(inputs)
	if (locale === "nl") return nl_kits_view_public(inputs)
	if (locale === "pl") return pl_kits_view_public(inputs)
	if (locale === "pt") return pt_kits_view_public(inputs)
	if (locale === "ru") return ru_kits_view_public(inputs)
	if (locale === "sv") return sv_kits_view_public(inputs)
	if (locale === "tr") return tr_kits_view_public(inputs)
	if (locale === "zh") return zh_kits_view_public(inputs)
	if (locale === "ja") return ja_kits_view_public(inputs)
	return en_kits_view_public(inputs)
});
