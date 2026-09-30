/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_HintInputs */

const en_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New versions of the mods in your backpack`)
};

const es_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevas versiones de los mods de tu mochila`)
};

const de_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Versionen der Mods in deinem Rucksack`)
};

const fr_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelles versions des mods de votre sac à dos`)
};

const it_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove versioni delle mod nel tuo zaino`)
};

const nl_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versies van de mods in je rugzak`)
};

const pl_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe wersje modów z twojego plecaka`)
};

const pt_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novas versões dos mods da sua mochila`)
};

const ru_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые версии модов из вашего рюкзака`)
};

const sv_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya versioner av moddarna i din ryggsäck`)
};

const tr_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantandaki modların yeni sürümleri`)
};

const zh_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你背包中模组的新版本`)
};

const ja_landing_personal_hint = /** @type {(inputs: Landing_Personal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパック内のMODの新バージョン`)
};

/**
* | output |
* | --- |
* | "New versions of the mods in your backpack" |
*
* @param {Landing_Personal_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_hint = /** @type {((inputs?: Landing_Personal_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_hint(inputs)
	if (locale === "de") return de_landing_personal_hint(inputs)
	if (locale === "fr") return fr_landing_personal_hint(inputs)
	if (locale === "it") return it_landing_personal_hint(inputs)
	if (locale === "nl") return nl_landing_personal_hint(inputs)
	if (locale === "pl") return pl_landing_personal_hint(inputs)
	if (locale === "pt") return pt_landing_personal_hint(inputs)
	if (locale === "ru") return ru_landing_personal_hint(inputs)
	if (locale === "sv") return sv_landing_personal_hint(inputs)
	if (locale === "tr") return tr_landing_personal_hint(inputs)
	if (locale === "zh") return zh_landing_personal_hint(inputs)
	if (locale === "ja") return ja_landing_personal_hint(inputs)
	return en_landing_personal_hint(inputs)
});
