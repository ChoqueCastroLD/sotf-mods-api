/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_First_BlueprintInputs */

const en_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Blueprint`)
};

const es_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primer plano`)
};

const de_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erster Bauplan`)
};

const fr_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier plan`)
};

const it_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo progetto`)
};

const nl_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste bouwtekening`)
};

const pl_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy plan`)
};

const pt_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeira planta`)
};

const ru_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый чертёж`)
};

const sv_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första ritningen`)
};

const tr_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Plan`)
};

const zh_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一张蓝图`)
};

const ja_signals_badge_name_first_blueprint = /** @type {(inputs: Signals_Badge_Name_First_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の設計図`)
};

/**
* | output |
* | --- |
* | "First Blueprint" |
*
* @param {Signals_Badge_Name_First_BlueprintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_first_blueprint = /** @type {((inputs?: Signals_Badge_Name_First_BlueprintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_First_BlueprintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_first_blueprint(inputs)
	if (locale === "de") return de_signals_badge_name_first_blueprint(inputs)
	if (locale === "fr") return fr_signals_badge_name_first_blueprint(inputs)
	if (locale === "it") return it_signals_badge_name_first_blueprint(inputs)
	if (locale === "nl") return nl_signals_badge_name_first_blueprint(inputs)
	if (locale === "pl") return pl_signals_badge_name_first_blueprint(inputs)
	if (locale === "pt") return pt_signals_badge_name_first_blueprint(inputs)
	if (locale === "ru") return ru_signals_badge_name_first_blueprint(inputs)
	if (locale === "sv") return sv_signals_badge_name_first_blueprint(inputs)
	if (locale === "tr") return tr_signals_badge_name_first_blueprint(inputs)
	if (locale === "zh") return zh_signals_badge_name_first_blueprint(inputs)
	if (locale === "ja") return ja_signals_badge_name_first_blueprint(inputs)
	return en_signals_badge_name_first_blueprint(inputs)
});
