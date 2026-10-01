/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_4_TextInputs */

const en_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scores are Bayesian averages. Badges go to the whole team.`)
};

const es_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las puntuaciones son medias bayesianas. Las insignias son para todo el equipo.`)
};

const de_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Wertung nutzt bayessche Durchschnitte. Abzeichen gehen an das ganze Team.`)
};

const fr_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les scores sont des moyennes bayésiennes. Les badges vont à toute l'équipe.`)
};

const it_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I punteggi sono medie bayesiane. I badge vanno a tutto il team.`)
};

const nl_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scores zijn bayesiaanse gemiddelden. Badges gaan naar het hele team.`)
};

const pl_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki to średnie bayesowskie. Odznaki trafiają do całego zespołu.`)
};

const pt_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As notas são médias bayesianas. As insígnias vão para toda a equipe.`)
};

const ru_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты считаются по байесовскому среднему. Значки получает вся команда.`)
};

const sv_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poängen är bayesianska medelvärden. Märkena går till hela laget.`)
};

const tr_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puanlar Bayesçi ortalamalardır. Rozetler tüm ekibe gider.`)
};

const zh_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分采用贝叶斯平均，徽章授予整个团队。`)
};

const ja_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スコアはベイズ平均で計算され、バッジはチーム全員に贈られます。`)
};

/**
* | output |
* | --- |
* | "Scores are Bayesian averages. Badges go to the whole team." |
*
* @param {Jams_How_4_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_4_text = /** @type {((inputs?: Jams_How_4_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_4_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_4_text(inputs)
	if (locale === "de") return de_jams_how_4_text(inputs)
	if (locale === "fr") return fr_jams_how_4_text(inputs)
	if (locale === "it") return it_jams_how_4_text(inputs)
	if (locale === "nl") return nl_jams_how_4_text(inputs)
	if (locale === "pl") return pl_jams_how_4_text(inputs)
	if (locale === "pt") return pt_jams_how_4_text(inputs)
	if (locale === "ru") return ru_jams_how_4_text(inputs)
	if (locale === "sv") return sv_jams_how_4_text(inputs)
	if (locale === "tr") return tr_jams_how_4_text(inputs)
	if (locale === "zh") return zh_jams_how_4_text(inputs)
	if (locale === "ja") return ja_jams_how_4_text(inputs)
	return en_jams_how_4_text(inputs)
});
