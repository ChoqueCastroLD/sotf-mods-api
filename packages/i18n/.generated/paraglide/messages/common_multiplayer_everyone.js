/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Multiplayer_EveryoneInputs */

const en_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everyone needs it`)
};

const es_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos lo necesitan`)
};

const de_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle brauchen ihn`)
};

const fr_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requis pour tous`)
};

const it_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve a tutti`)
};

const nl_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iedereen heeft hem nodig`)
};

const pl_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebny wszystkim`)
};

const pt_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos precisam`)
};

const ru_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен всем`)
};

const sv_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla behöver den`)
};

const tr_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkeste olmalı`)
};

const zh_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有人都需要`)
};

const ja_common_multiplayer_everyone = /** @type {(inputs: Common_Multiplayer_EveryoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員に必要`)
};

/**
* | output |
* | --- |
* | "Everyone needs it" |
*
* @param {Common_Multiplayer_EveryoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_multiplayer_everyone = /** @type {((inputs?: Common_Multiplayer_EveryoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Multiplayer_EveryoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_multiplayer_everyone(inputs)
	if (locale === "de") return de_common_multiplayer_everyone(inputs)
	if (locale === "fr") return fr_common_multiplayer_everyone(inputs)
	if (locale === "it") return it_common_multiplayer_everyone(inputs)
	if (locale === "nl") return nl_common_multiplayer_everyone(inputs)
	if (locale === "pl") return pl_common_multiplayer_everyone(inputs)
	if (locale === "pt") return pt_common_multiplayer_everyone(inputs)
	if (locale === "ru") return ru_common_multiplayer_everyone(inputs)
	if (locale === "sv") return sv_common_multiplayer_everyone(inputs)
	if (locale === "tr") return tr_common_multiplayer_everyone(inputs)
	if (locale === "zh") return zh_common_multiplayer_everyone(inputs)
	if (locale === "ja") return ja_common_multiplayer_everyone(inputs)
	return en_common_multiplayer_everyone(inputs)
});
