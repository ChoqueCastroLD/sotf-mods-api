/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ shown: NonNullable<unknown>, total: NonNullable<unknown> }} Viewer_SampledInputs */

const en_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing ${i?.shown} of ${i?.total} pieces.`)
};

const es_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se muestran ${i?.shown} de ${i?.total} piezas.`)
};

const de_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} von ${i?.total} Teilen werden angezeigt.`)
};

const fr_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} pièces affichées sur ${i?.total}.`)
};

const it_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrati ${i?.shown} pezzi su ${i?.total}.`)
};

const nl_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} van ${i?.total} stukken getoond.`)
};

const pl_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokazano ${i?.shown} z ${i?.total} elementów.`)
};

const pt_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A mostrar ${i?.shown} de ${i?.total} peças.`)
};

const ru_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показано ${i?.shown} из ${i?.total} деталей.`)
};

const sv_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visar ${i?.shown} av ${i?.total} delar.`)
};

const tr_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} parçadan ${i?.shown} tanesi gösteriliyor.`)
};

const zh_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示 ${i?.total} 个构件中的 ${i?.shown} 个。`)
};

const ja_viewer_sampled = /** @type {(inputs: Viewer_SampledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 個中 ${i?.shown} 個のパーツを表示しています。`)
};

/**
* | output |
* | --- |
* | "Showing {shown} of {total} pieces." |
*
* @param {Viewer_SampledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_sampled = /** @type {((inputs: Viewer_SampledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_SampledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_sampled(inputs)
	if (locale === "de") return de_viewer_sampled(inputs)
	if (locale === "fr") return fr_viewer_sampled(inputs)
	if (locale === "it") return it_viewer_sampled(inputs)
	if (locale === "nl") return nl_viewer_sampled(inputs)
	if (locale === "pl") return pl_viewer_sampled(inputs)
	if (locale === "pt") return pt_viewer_sampled(inputs)
	if (locale === "ru") return ru_viewer_sampled(inputs)
	if (locale === "sv") return sv_viewer_sampled(inputs)
	if (locale === "tr") return tr_viewer_sampled(inputs)
	if (locale === "zh") return zh_viewer_sampled(inputs)
	if (locale === "ja") return ja_viewer_sampled(inputs)
	return en_viewer_sampled(inputs)
});
