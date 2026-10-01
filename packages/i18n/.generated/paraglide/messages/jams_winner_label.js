/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Winner_LabelInputs */

const en_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Winner`)
};

const es_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ganador`)
};

const de_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewinner`)
};

const fr_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gagnant`)
};

const it_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincitore`)
};

const nl_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Winnaar`)
};

const pl_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwycięzca`)
};

const pt_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vencedor`)
};

const ru_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Победитель`)
};

const sv_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vinnare`)
};

const tr_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kazanan`)
};

const zh_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`冠军`)
};

const ja_jams_winner_label = /** @type {(inputs: Jams_Winner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`優勝`)
};

/**
* | output |
* | --- |
* | "Winner" |
*
* @param {Jams_Winner_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_winner_label = /** @type {((inputs?: Jams_Winner_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Winner_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_winner_label(inputs)
	if (locale === "de") return de_jams_winner_label(inputs)
	if (locale === "fr") return fr_jams_winner_label(inputs)
	if (locale === "it") return it_jams_winner_label(inputs)
	if (locale === "nl") return nl_jams_winner_label(inputs)
	if (locale === "pl") return pl_jams_winner_label(inputs)
	if (locale === "pt") return pt_jams_winner_label(inputs)
	if (locale === "ru") return ru_jams_winner_label(inputs)
	if (locale === "sv") return sv_jams_winner_label(inputs)
	if (locale === "tr") return tr_jams_winner_label(inputs)
	if (locale === "zh") return zh_jams_winner_label(inputs)
	if (locale === "ja") return ja_jams_winner_label(inputs)
	return en_jams_winner_label(inputs)
});
