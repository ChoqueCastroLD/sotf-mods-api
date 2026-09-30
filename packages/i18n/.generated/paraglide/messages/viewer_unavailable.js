/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_UnavailableInputs */

const en_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No preview is available for this build.`)
};

const es_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay vista previa para esta construcción.`)
};

const de_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für dieses Bauwerk gibt es keine Vorschau.`)
};

const fr_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun aperçu n'est disponible pour cette construction.`)
};

const it_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna anteprima disponibile per questa costruzione.`)
};

const nl_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is geen voorbeeld voor deze bouwwerk.`)
};

const pl_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak podglądu dla tej budowli.`)
};

const pt_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há pré-visualização para esta construção.`)
};

const ru_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этой постройки нет превью.`)
};

const sv_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen förhandsvisning finns för bygget.`)
};

const tr_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapı için önizleme yok.`)
};

const zh_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此建筑没有可用的预览。`)
};

const ja_viewer_unavailable = /** @type {(inputs: Viewer_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築のプレビューはありません。`)
};

/**
* | output |
* | --- |
* | "No preview is available for this build." |
*
* @param {Viewer_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_unavailable = /** @type {((inputs?: Viewer_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_unavailable(inputs)
	if (locale === "de") return de_viewer_unavailable(inputs)
	if (locale === "fr") return fr_viewer_unavailable(inputs)
	if (locale === "it") return it_viewer_unavailable(inputs)
	if (locale === "nl") return nl_viewer_unavailable(inputs)
	if (locale === "pl") return pl_viewer_unavailable(inputs)
	if (locale === "pt") return pt_viewer_unavailable(inputs)
	if (locale === "ru") return ru_viewer_unavailable(inputs)
	if (locale === "sv") return sv_viewer_unavailable(inputs)
	if (locale === "tr") return tr_viewer_unavailable(inputs)
	if (locale === "zh") return zh_viewer_unavailable(inputs)
	if (locale === "ja") return ja_viewer_unavailable(inputs)
	return en_viewer_unavailable(inputs)
});
