/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Pick_PlaceholderInputs */

const en_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a kit`)
};

const es_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un kit`)
};

const de_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit auswählen`)
};

const fr_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisis un kit`)
};

const it_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un kit`)
};

const nl_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een kit`)
};

const pl_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz zestaw`)
};

const pt_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolhe um kit`)
};

const ru_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите набор`)
};

const sv_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett kit`)
};

const tr_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kit seç`)
};

const zh_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择合集`)
};

const ja_bundles_pick_placeholder = /** @type {(inputs: Bundles_Pick_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを選択`)
};

/**
* | output |
* | --- |
* | "Choose a kit" |
*
* @param {Bundles_Pick_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_pick_placeholder = /** @type {((inputs?: Bundles_Pick_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Pick_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_pick_placeholder(inputs)
	if (locale === "de") return de_bundles_pick_placeholder(inputs)
	if (locale === "fr") return fr_bundles_pick_placeholder(inputs)
	if (locale === "it") return it_bundles_pick_placeholder(inputs)
	if (locale === "nl") return nl_bundles_pick_placeholder(inputs)
	if (locale === "pl") return pl_bundles_pick_placeholder(inputs)
	if (locale === "pt") return pt_bundles_pick_placeholder(inputs)
	if (locale === "ru") return ru_bundles_pick_placeholder(inputs)
	if (locale === "sv") return sv_bundles_pick_placeholder(inputs)
	if (locale === "tr") return tr_bundles_pick_placeholder(inputs)
	if (locale === "zh") return zh_bundles_pick_placeholder(inputs)
	if (locale === "ja") return ja_bundles_pick_placeholder(inputs)
	return en_bundles_pick_placeholder(inputs)
});
