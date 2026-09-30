/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_PiecesInputs */

const en_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pieces`)
};

const es_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piezas`)
};

const de_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teile`)
};

const fr_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pièces`)
};

const it_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pezzi`)
};

const nl_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen`)
};

const pl_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementy`)
};

const pt_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peças`)
};

const ru_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Детали`)
};

const sv_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delar`)
};

const tr_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parçalar`)
};

const zh_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部件`)
};

const ja_builds_spec_pieces = /** @type {(inputs: Builds_Spec_PiecesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パーツ`)
};

/**
* | output |
* | --- |
* | "Pieces" |
*
* @param {Builds_Spec_PiecesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_pieces = /** @type {((inputs?: Builds_Spec_PiecesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_PiecesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_pieces(inputs)
	if (locale === "de") return de_builds_spec_pieces(inputs)
	if (locale === "fr") return fr_builds_spec_pieces(inputs)
	if (locale === "it") return it_builds_spec_pieces(inputs)
	if (locale === "nl") return nl_builds_spec_pieces(inputs)
	if (locale === "pl") return pl_builds_spec_pieces(inputs)
	if (locale === "pt") return pt_builds_spec_pieces(inputs)
	if (locale === "ru") return ru_builds_spec_pieces(inputs)
	if (locale === "sv") return sv_builds_spec_pieces(inputs)
	if (locale === "tr") return tr_builds_spec_pieces(inputs)
	if (locale === "zh") return zh_builds_spec_pieces(inputs)
	if (locale === "ja") return ja_builds_spec_pieces(inputs)
	return en_builds_spec_pieces(inputs)
});
