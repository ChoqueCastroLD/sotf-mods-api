/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Kit_HintInputs */

const en_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ready-made set of mods, picked by the rangers`)
};

const es_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un conjunto de mods listo para usar, elegido por los guardabosques`)
};

const de_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein fertiges Mod-Set, ausgewählt von den Rangern`)
};

const fr_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ensemble de mods prêt à l’emploi, choisi par les rangers`)
};

const it_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un set di mod pronto all’uso, scelto dai ranger`)
};

const nl_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een kant-en-klare set mods, gekozen door de rangers`)
};

const pl_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowy zestaw modów wybrany przez strażników`)
};

const pt_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um conjunto de mods pronto para usar, escolhido pelos guardas`)
};

const ru_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готовый набор модов, выбранный рейнджерами`)
};

const sv_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En färdig uppsättning moddar, vald av rangers`)
};

const tr_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucuların seçtiği, kullanıma hazır bir mod seti`)
};

const zh_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员挑选的一套即用模组`)
};

const ja_landing_kit_hint = /** @type {(inputs: Landing_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーが選んだ、すぐに使えるMODセット`)
};

/**
* | output |
* | --- |
* | "A ready-made set of mods, picked by the rangers" |
*
* @param {Landing_Kit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_kit_hint = /** @type {((inputs?: Landing_Kit_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Kit_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_kit_hint(inputs)
	if (locale === "de") return de_landing_kit_hint(inputs)
	if (locale === "fr") return fr_landing_kit_hint(inputs)
	if (locale === "it") return it_landing_kit_hint(inputs)
	if (locale === "nl") return nl_landing_kit_hint(inputs)
	if (locale === "pl") return pl_landing_kit_hint(inputs)
	if (locale === "pt") return pt_landing_kit_hint(inputs)
	if (locale === "ru") return ru_landing_kit_hint(inputs)
	if (locale === "sv") return sv_landing_kit_hint(inputs)
	if (locale === "tr") return tr_landing_kit_hint(inputs)
	if (locale === "zh") return zh_landing_kit_hint(inputs)
	if (locale === "ja") return ja_landing_kit_hint(inputs)
	return en_landing_kit_hint(inputs)
});
