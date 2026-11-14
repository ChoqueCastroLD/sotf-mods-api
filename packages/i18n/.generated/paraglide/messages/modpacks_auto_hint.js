/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Auto_HintInputs */

const en_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`These mods are needed by others in the modpack.`)
};

const es_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otros mods del modpack los necesitan.`)
};

const de_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Mods im Modpack benötigen diese.`)
};

const fr_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`D’autres mods du modpack en ont besoin.`)
};

const it_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servono ad altre mod del modpack.`)
};

const nl_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere mods in de modpack hebben deze nodig.`)
};

const pl_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebują ich inne mody w modpacku.`)
};

const pt_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outros mods do modpack precisam deles.`)
};

const ru_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Они нужны другим модам модпака.`)
};

const sv_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra moddar i modpaketet behöver dem.`)
};

const tr_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paketteki diğer modlar bunlara ihtiyaç duyuyor.`)
};

const zh_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包中的其他模组需要它们。`)
};

const ja_modpacks_auto_hint = /** @type {(inputs: Modpacks_Auto_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック内の他の Mod に必要です。`)
};

/**
* | output |
* | --- |
* | "These mods are needed by others in the modpack." |
*
* @param {Modpacks_Auto_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_auto_hint = /** @type {((inputs?: Modpacks_Auto_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Auto_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_auto_hint(inputs)
	if (locale === "de") return de_modpacks_auto_hint(inputs)
	if (locale === "fr") return fr_modpacks_auto_hint(inputs)
	if (locale === "it") return it_modpacks_auto_hint(inputs)
	if (locale === "nl") return nl_modpacks_auto_hint(inputs)
	if (locale === "pl") return pl_modpacks_auto_hint(inputs)
	if (locale === "pt") return pt_modpacks_auto_hint(inputs)
	if (locale === "ru") return ru_modpacks_auto_hint(inputs)
	if (locale === "sv") return sv_modpacks_auto_hint(inputs)
	if (locale === "tr") return tr_modpacks_auto_hint(inputs)
	if (locale === "zh") return zh_modpacks_auto_hint(inputs)
	if (locale === "ja") return ja_modpacks_auto_hint(inputs)
	return en_modpacks_auto_hint(inputs)
});
