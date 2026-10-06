/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_4_TextInputs */

const en_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scores are weighted averages. Results are shown for each category and overall.`)
};

const es_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las puntuaciones son medias ponderadas. Los resultados se muestran por categoría y en total.`)
};

const de_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Wertung nutzt gewichtete Durchschnitte. Die Ergebnisse gibt es pro Kategorie und insgesamt.`)
};

const fr_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les scores sont des moyennes pondérées. Les résultats sont affichés par catégorie et au classement général.`)
};

const it_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I punteggi sono medie ponderate. I risultati sono mostrati per categoria e in generale.`)
};

const nl_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scores zijn gewogen gemiddelden. De resultaten worden per categorie en algemeen getoond.`)
};

const pl_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki to średnie ważone. Wyniki pokazujemy dla każdej kategorii i ogółem.`)
};

const pt_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As notas são médias ponderadas. Os resultados aparecem por categoria e no geral.`)
};

const ru_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты считаются по взвешенному среднему. Итоги показываются по каждой категории и в целом.`)
};

const sv_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poängen är viktade medelvärden. Resultaten visas per kategori och totalt.`)
};

const tr_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puanlar ağırlıklı ortalamalardır. Sonuçlar her kategori için ve genel olarak gösterilir.`)
};

const zh_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分采用加权平均。结果按类别和总体分别显示。`)
};

const ja_jams_how_4_text = /** @type {(inputs: Jams_How_4_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スコアは加重平均で計算されます。結果はカテゴリーごとと総合で表示されます。`)
};

/**
* | output |
* | --- |
* | "Scores are weighted averages. Results are shown for each category and overall." |
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
