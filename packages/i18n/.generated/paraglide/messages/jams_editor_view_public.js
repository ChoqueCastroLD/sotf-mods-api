/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_View_PublicInputs */

const en_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View public page`)
};

const es_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página pública`)
};

const de_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentliche Seite ansehen`)
};

const fr_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la page publique`)
};

const it_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi pagina pubblica`)
};

const nl_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbare pagina bekijken`)
};

const pl_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz stronę publiczną`)
};

const pt_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver página pública`)
};

const ru_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть публичную страницу`)
};

const sv_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa publik sida`)
};

const tr_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık sayfayı gör`)
};

const zh_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看公开页面`)
};

const ja_jams_editor_view_public = /** @type {(inputs: Jams_Editor_View_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開ページを見る`)
};

/**
* | output |
* | --- |
* | "View public page" |
*
* @param {Jams_Editor_View_PublicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_view_public = /** @type {((inputs?: Jams_Editor_View_PublicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_View_PublicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_view_public(inputs)
	if (locale === "de") return de_jams_editor_view_public(inputs)
	if (locale === "fr") return fr_jams_editor_view_public(inputs)
	if (locale === "it") return it_jams_editor_view_public(inputs)
	if (locale === "nl") return nl_jams_editor_view_public(inputs)
	if (locale === "pl") return pl_jams_editor_view_public(inputs)
	if (locale === "pt") return pt_jams_editor_view_public(inputs)
	if (locale === "ru") return ru_jams_editor_view_public(inputs)
	if (locale === "sv") return sv_jams_editor_view_public(inputs)
	if (locale === "tr") return tr_jams_editor_view_public(inputs)
	if (locale === "zh") return zh_jams_editor_view_public(inputs)
	if (locale === "ja") return ja_jams_editor_view_public(inputs)
	return en_jams_editor_view_public(inputs)
});
