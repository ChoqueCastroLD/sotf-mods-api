/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_RulesInputs */

const en_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One review per user. Be specific: version, what worked, what didn’t.`)
};

const es_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una reseña por usuario. Sé concreto: versión, qué funcionó y qué no.`)
};

const de_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Bewertung pro Benutzer. Sei konkret: Version, was lief, was nicht.`)
};

const fr_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un avis par utilisateur. Soyez précis : version, ce qui a marché, ce qui n’a pas marché.`)
};

const it_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una recensione per utente. Sii preciso: versione, cosa ha funzionato e cosa no.`)
};

const nl_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén review per gebruiker. Wees concreet: versie, wat werkte en wat niet.`)
};

const pl_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedna recenzja na użytkownika. Konkretnie: wersja, co działało, a co nie.`)
};

const pt_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma avaliação por usuário. Seja específico: versão, o que funcionou e o que não.`)
};

const ru_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один отзыв на пользователя. Конкретно: версия, что работало, а что нет.`)
};

const sv_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En recension per användare. Var konkret: version, vad som fungerade och vad som inte gjorde det.`)
};

const tr_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı başına bir inceleme. Net ol: sürüm, neyin çalıştığı, neyin çalışmadığı.`)
};

const zh_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每位用户一条评价。请具体说明：版本、哪些能用、哪些不能用。`)
};

const ja_social_review_rules = /** @type {(inputs: Social_Review_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューはユーザー 1 人につき 1 件。バージョン、動いた点、動かなかった点を具体的に。`)
};

/**
* | output |
* | --- |
* | "One review per user. Be specific: version, what worked, what didn’t." |
*
* @param {Social_Review_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_rules = /** @type {((inputs?: Social_Review_RulesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_RulesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_rules(inputs)
	if (locale === "de") return de_social_review_rules(inputs)
	if (locale === "fr") return fr_social_review_rules(inputs)
	if (locale === "it") return it_social_review_rules(inputs)
	if (locale === "nl") return nl_social_review_rules(inputs)
	if (locale === "pl") return pl_social_review_rules(inputs)
	if (locale === "pt") return pt_social_review_rules(inputs)
	if (locale === "ru") return ru_social_review_rules(inputs)
	if (locale === "sv") return sv_social_review_rules(inputs)
	if (locale === "tr") return tr_social_review_rules(inputs)
	if (locale === "zh") return zh_social_review_rules(inputs)
	if (locale === "ja") return ja_social_review_rules(inputs)
	return en_social_review_rules(inputs)
});
