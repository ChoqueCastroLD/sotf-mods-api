/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Slow_QInputs */

const en_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why is the first start with mods slow?`)
};

const es_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Por qué el primer arranque con mods es lento?`)
};

const de_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warum ist der erste Start mit Mods langsam?`)
};

const fr_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pourquoi le premier lancement avec des mods est-il lent ?`)
};

const it_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perché il primo avvio con le mod è lento?`)
};

const nl_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarom is de eerste start met mods traag?`)
};

const pl_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dlaczego pierwsze uruchomienie z modami jest wolne?`)
};

const pt_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por que a primeira abertura com mods é lenta?`)
};

const ru_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почему первый запуск с модами долгий?`)
};

const sv_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varför är första starten med moddar långsam?`)
};

const tr_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarla ilk açılış neden yavaş?`)
};

const zh_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为什么首次带模组启动很慢？`)
};

const ja_manager_faq_slow_q = /** @type {(inputs: Manager_Faq_Slow_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を入れた初回起動が遅いのはなぜ？`)
};

/**
* | output |
* | --- |
* | "Why is the first start with mods slow?" |
*
* @param {Manager_Faq_Slow_QInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_slow_q = /** @type {((inputs?: Manager_Faq_Slow_QInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Slow_QInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_slow_q(inputs)
	if (locale === "de") return de_manager_faq_slow_q(inputs)
	if (locale === "fr") return fr_manager_faq_slow_q(inputs)
	if (locale === "it") return it_manager_faq_slow_q(inputs)
	if (locale === "nl") return nl_manager_faq_slow_q(inputs)
	if (locale === "pl") return pl_manager_faq_slow_q(inputs)
	if (locale === "pt") return pt_manager_faq_slow_q(inputs)
	if (locale === "ru") return ru_manager_faq_slow_q(inputs)
	if (locale === "sv") return sv_manager_faq_slow_q(inputs)
	if (locale === "tr") return tr_manager_faq_slow_q(inputs)
	if (locale === "zh") return zh_manager_faq_slow_q(inputs)
	if (locale === "ja") return ja_manager_faq_slow_q(inputs)
	return en_manager_faq_slow_q(inputs)
});
