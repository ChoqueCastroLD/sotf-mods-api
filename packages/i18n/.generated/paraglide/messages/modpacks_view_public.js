/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_View_PublicInputs */

const en_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View page`)
};

const es_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página`)
};

const de_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite ansehen`)
};

const fr_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la page`)
};

const it_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi pagina`)
};

const nl_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina bekijken`)
};

const pl_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz stronę`)
};

const pt_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página`)
};

const ru_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу`)
};

const sv_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa sida`)
};

const tr_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı gör`)
};

const zh_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看页面`)
};

const ja_modpacks_view_public = /** @type {(inputs: Modpacks_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを見る`)
};

/**
* | output |
* | --- |
* | "View page" |
*
* @param {Modpacks_View_PublicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_view_public = /** @type {((inputs?: Modpacks_View_PublicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_View_PublicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_view_public(inputs)
	if (locale === "de") return de_modpacks_view_public(inputs)
	if (locale === "fr") return fr_modpacks_view_public(inputs)
	if (locale === "it") return it_modpacks_view_public(inputs)
	if (locale === "nl") return nl_modpacks_view_public(inputs)
	if (locale === "pl") return pl_modpacks_view_public(inputs)
	if (locale === "pt") return pt_modpacks_view_public(inputs)
	if (locale === "ru") return ru_modpacks_view_public(inputs)
	if (locale === "sv") return sv_modpacks_view_public(inputs)
	if (locale === "tr") return tr_modpacks_view_public(inputs)
	if (locale === "zh") return zh_modpacks_view_public(inputs)
	if (locale === "ja") return ja_modpacks_view_public(inputs)
	return en_modpacks_view_public(inputs)
});
