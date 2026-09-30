/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_HintInputs */

const en_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Three steps, about three minutes.`)
};

const es_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tres pasos, unos tres minutos.`)
};

const de_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drei Schritte, etwa drei Minuten.`)
};

const fr_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trois étapes, environ trois minutes.`)
};

const it_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tre passaggi, circa tre minuti.`)
};

const nl_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drie stappen, ongeveer drie minuten.`)
};

const pl_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trzy kroki, około trzech minut.`)
};

const pt_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Três passos, cerca de três minutos.`)
};

const ru_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Три шага, около трёх минут.`)
};

const sv_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tre steg, ungefär tre minuter.`)
};

const tr_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üç adım, yaklaşık üç dakika.`)
};

const zh_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`三个步骤，大约三分钟。`)
};

const ja_landing_start_hint = /** @type {(inputs: Landing_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3ステップ、約3分です。`)
};

/**
* | output |
* | --- |
* | "Three steps, about three minutes." |
*
* @param {Landing_Start_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_hint = /** @type {((inputs?: Landing_Start_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_hint(inputs)
	if (locale === "de") return de_landing_start_hint(inputs)
	if (locale === "fr") return fr_landing_start_hint(inputs)
	if (locale === "it") return it_landing_start_hint(inputs)
	if (locale === "nl") return nl_landing_start_hint(inputs)
	if (locale === "pl") return pl_landing_start_hint(inputs)
	if (locale === "pt") return pt_landing_start_hint(inputs)
	if (locale === "ru") return ru_landing_start_hint(inputs)
	if (locale === "sv") return sv_landing_start_hint(inputs)
	if (locale === "tr") return tr_landing_start_hint(inputs)
	if (locale === "zh") return zh_landing_start_hint(inputs)
	if (locale === "ja") return ja_landing_start_hint(inputs)
	return en_landing_start_hint(inputs)
});
