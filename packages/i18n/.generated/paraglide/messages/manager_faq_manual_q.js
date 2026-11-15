/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Manual_QInputs */

const en_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What happens to mods I installed by hand?`)
};

const es_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué pasa con los mods que instalé a mano?`)
};

const de_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was passiert mit Mods, die ich von Hand installiert habe?`)
};

const fr_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que deviennent les mods installés à la main ?`)
};

const it_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Che fine fanno le mod installate a mano?`)
};

const nl_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat gebeurt er met mods die ik met de hand installeerde?`)
};

const pl_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co z modami zainstalowanymi ręcznie?`)
};

const pt_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que acontece com os mods que instalei à mão?`)
};

const ru_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что будет с модами, установленными вручную?`)
};

const sv_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad händer med moddar jag installerat för hand?`)
};

const tr_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle kurduğum modlara ne olur?`)
};

const zh_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我手动安装的模组会怎样？`)
};

const ja_manager_faq_manual_q = /** @type {(inputs: Manager_Faq_Manual_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手動で入れた Mod はどうなりますか？`)
};

/**
* | output |
* | --- |
* | "What happens to mods I installed by hand?" |
*
* @param {Manager_Faq_Manual_QInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_manual_q = /** @type {((inputs?: Manager_Faq_Manual_QInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Manual_QInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_manual_q(inputs)
	if (locale === "de") return de_manager_faq_manual_q(inputs)
	if (locale === "fr") return fr_manager_faq_manual_q(inputs)
	if (locale === "it") return it_manager_faq_manual_q(inputs)
	if (locale === "nl") return nl_manager_faq_manual_q(inputs)
	if (locale === "pl") return pl_manager_faq_manual_q(inputs)
	if (locale === "pt") return pt_manager_faq_manual_q(inputs)
	if (locale === "ru") return ru_manager_faq_manual_q(inputs)
	if (locale === "sv") return sv_manager_faq_manual_q(inputs)
	if (locale === "tr") return tr_manager_faq_manual_q(inputs)
	if (locale === "zh") return zh_manager_faq_manual_q(inputs)
	if (locale === "ja") return ja_manager_faq_manual_q(inputs)
	return en_manager_faq_manual_q(inputs)
});
