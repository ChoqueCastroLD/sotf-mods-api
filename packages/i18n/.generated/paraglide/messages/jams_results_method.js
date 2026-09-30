/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Jams_Results_MethodInputs */

const en_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scores are Bayesian averages. An entry needs at least ${i?.min} votes to be ranked.`)
};

const es_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Las puntuaciones son promedios bayesianos. Una participación necesita al menos ${i?.min} votos para clasificarse.`)
};

const de_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Wertungen sind bayessche Durchschnitte. Ein Beitrag braucht mindestens ${i?.min} Stimmen, um platziert zu werden.`)
};

const fr_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les notes sont des moyennes bayésiennes. Une participation doit recueillir au moins ${i?.min} votes pour être classée.`)
};

const it_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I punteggi sono medie bayesiane. Un'iscrizione richiede almeno ${i?.min} voti per essere classificata.`)
};

const nl_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scores zijn bayesiaanse gemiddelden. Een inzending heeft minstens ${i?.min} stemmen nodig om te worden gerangschikt.`)
};

const pl_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyniki to średnie bayesowskie. Zgłoszenie potrzebuje co najmniej ${i?.min} głosów, aby trafić do rankingu.`)
};

const pt_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`As notas são médias bayesianas. Uma inscrição precisa de pelo menos ${i?.min} votos para ser classificada.`)
};

const ru_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оценки — байесовские средние. Чтобы попасть в рейтинг, работа должна набрать не менее ${i?.min} голосов.`)
};

const sv_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poängen är bayesianska medelvärden. Ett bidrag behöver minst ${i?.min} röster för att rankas.`)
};

const tr_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Puanlar Bayes ortalamasıdır. Bir başvurunun sıralamaya girmesi için en az ${i?.min} oy gerekir.`)
};

const zh_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`分数为贝叶斯平均值。作品至少需要 ${i?.min} 票才能参与排名。`)
};

const ja_jams_results_method = /** @type {(inputs: Jams_Results_MethodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`スコアはベイズ平均です。順位の対象になるには ${i?.min} 票以上が必要です。`)
};

/**
* | output |
* | --- |
* | "Scores are Bayesian averages. An entry needs at least {min} votes to be ranked." |
*
* @param {Jams_Results_MethodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_method = /** @type {((inputs: Jams_Results_MethodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_MethodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_method(inputs)
	if (locale === "de") return de_jams_results_method(inputs)
	if (locale === "fr") return fr_jams_results_method(inputs)
	if (locale === "it") return it_jams_results_method(inputs)
	if (locale === "nl") return nl_jams_results_method(inputs)
	if (locale === "pl") return pl_jams_results_method(inputs)
	if (locale === "pt") return pt_jams_results_method(inputs)
	if (locale === "ru") return ru_jams_results_method(inputs)
	if (locale === "sv") return sv_jams_results_method(inputs)
	if (locale === "tr") return tr_jams_results_method(inputs)
	if (locale === "zh") return zh_jams_results_method(inputs)
	if (locale === "ja") return ja_jams_results_method(inputs)
	return en_jams_results_method(inputs)
});
