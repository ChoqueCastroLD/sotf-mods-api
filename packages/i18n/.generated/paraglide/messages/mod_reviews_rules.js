/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_RulesInputs */

const en_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One review per survivor. Be specific: version, what worked, what didn’t.`)
};

const es_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una reseña por superviviente. Sé concreto: versión, qué funcionó y qué no.`)
};

const de_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Bewertung pro Überlebendem. Sei konkret: Version, was lief, was nicht.`)
};

const fr_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un avis par survivant. Soyez précis : version, ce qui a marché, ce qui n’a pas marché.`)
};

const it_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una recensione per sopravvissuto. Sii preciso: versione, cosa ha funzionato e cosa no.`)
};

const nl_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén review per overlevende. Wees concreet: versie, wat werkte en wat niet.`)
};

const pl_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedna recenzja na ocalałego. Konkretnie: wersja, co działało, a co nie.`)
};

const pt_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma avaliação por sobrevivente. Seja específico: versão, o que funcionou e o que não.`)
};

const ru_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один отзыв на выжившего. Конкретно: версия, что работало, а что нет.`)
};

const sv_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En recension per överlevare. Var konkret: version, vad som fungerade och vad som inte gjorde det.`)
};

const tr_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalan başına bir inceleme. Net ol: sürüm, neyin çalıştığı, neyin çalışmadığı.`)
};

const zh_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每位幸存者一条评价。请具体说明：版本、哪些能用、哪些不能用。`)
};

const ja_mod_reviews_rules = /** @type {(inputs: Mod_Reviews_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューはサバイバー 1 人につき 1 件。バージョン、動いた点、動かなかった点を具体的に。`)
};

/**
* | output |
* | --- |
* | "One review per survivor. Be specific: version, what worked, what didn’t." |
*
* @param {Mod_Reviews_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_rules = /** @type {((inputs?: Mod_Reviews_RulesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_RulesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_rules(inputs)
	if (locale === "de") return de_mod_reviews_rules(inputs)
	if (locale === "fr") return fr_mod_reviews_rules(inputs)
	if (locale === "it") return it_mod_reviews_rules(inputs)
	if (locale === "nl") return nl_mod_reviews_rules(inputs)
	if (locale === "pl") return pl_mod_reviews_rules(inputs)
	if (locale === "pt") return pt_mod_reviews_rules(inputs)
	if (locale === "ru") return ru_mod_reviews_rules(inputs)
	if (locale === "sv") return sv_mod_reviews_rules(inputs)
	if (locale === "tr") return tr_mod_reviews_rules(inputs)
	if (locale === "zh") return zh_mod_reviews_rules(inputs)
	if (locale === "ja") return ja_mod_reviews_rules(inputs)
	return en_mod_reviews_rules(inputs)
});
