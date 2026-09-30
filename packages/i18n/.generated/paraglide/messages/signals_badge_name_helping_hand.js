/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Helping_HandInputs */

const en_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helping Hand`)
};

const es_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mano amiga`)
};

const de_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helfende Hand`)
};

const fr_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coup de main`)
};

const it_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mano amica`)
};

const nl_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helpende hand`)
};

const pl_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomocna dłoń`)
};

const pt_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mão amiga`)
};

const ru_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рука помощи`)
};

const sv_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälpande hand`)
};

const tr_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yardım Eli`)
};

const zh_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`援手`)
};

const ja_signals_badge_name_helping_hand = /** @type {(inputs: Signals_Badge_Name_Helping_HandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`助けの手`)
};

/**
* | output |
* | --- |
* | "Helping Hand" |
*
* @param {Signals_Badge_Name_Helping_HandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_helping_hand = /** @type {((inputs?: Signals_Badge_Name_Helping_HandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Helping_HandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_helping_hand(inputs)
	if (locale === "de") return de_signals_badge_name_helping_hand(inputs)
	if (locale === "fr") return fr_signals_badge_name_helping_hand(inputs)
	if (locale === "it") return it_signals_badge_name_helping_hand(inputs)
	if (locale === "nl") return nl_signals_badge_name_helping_hand(inputs)
	if (locale === "pl") return pl_signals_badge_name_helping_hand(inputs)
	if (locale === "pt") return pt_signals_badge_name_helping_hand(inputs)
	if (locale === "ru") return ru_signals_badge_name_helping_hand(inputs)
	if (locale === "sv") return sv_signals_badge_name_helping_hand(inputs)
	if (locale === "tr") return tr_signals_badge_name_helping_hand(inputs)
	if (locale === "zh") return zh_signals_badge_name_helping_hand(inputs)
	if (locale === "ja") return ja_signals_badge_name_helping_hand(inputs)
	return en_signals_badge_name_helping_hand(inputs)
});
