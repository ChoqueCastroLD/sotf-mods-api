/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_PrizeInputs */

const en_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every entry is listed on the jam page. The top entries in each category are announced with the results.`)
};

const es_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las participaciones aparecen en la página del jam. Las mejores de cada categoría se anuncian con los resultados.`)
};

const de_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Beiträge erscheinen auf der Seite der Jam. Die besten Beiträge jeder Kategorie werden mit den Ergebnissen bekannt gegeben.`)
};

const fr_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les participations figurent sur la page du jam. Les meilleures de chaque catégorie sont annoncées avec les résultats.`)
};

const it_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le iscrizioni compaiono nella pagina del jam. Le migliori di ogni categoria vengono annunciate con i risultati.`)
};

const nl_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle inzendingen staan op de pagina van de jam. De beste inzendingen per categorie worden met de resultaten bekendgemaakt.`)
};

const pl_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie zgłoszenia są widoczne na stronie jamu. Najlepsze w każdej kategorii zostaną ogłoszone razem z wynikami.`)
};

const pt_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as inscrições aparecem na página do jam. As melhores de cada categoria são anunciadas com os resultados.`)
};

const ru_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все работы показаны на странице джема. Лучшие в каждой категории объявляются вместе с результатами.`)
};

const sv_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla bidrag visas på jammens sida. De bästa i varje kategori tillkännages med resultaten.`)
};

const tr_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm başvurular jam sayfasında listelenir. Her kategorideki en iyiler sonuçlarla birlikte duyurulur.`)
};

const zh_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有作品都会显示在 Jam 页面上。各类别的最佳作品会随结果一起公布。`)
};

const ja_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募作品はすべてジャムのページに表示されます。各カテゴリーの上位作品は結果とともに発表されます。`)
};

/**
* | output |
* | --- |
* | "Every entry is listed on the jam page. The top entries in each category are announced with the results." |
*
* @param {Jams_First_PrizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_prize = /** @type {((inputs?: Jams_First_PrizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_PrizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_prize(inputs)
	if (locale === "de") return de_jams_first_prize(inputs)
	if (locale === "fr") return fr_jams_first_prize(inputs)
	if (locale === "it") return it_jams_first_prize(inputs)
	if (locale === "nl") return nl_jams_first_prize(inputs)
	if (locale === "pl") return pl_jams_first_prize(inputs)
	if (locale === "pt") return pt_jams_first_prize(inputs)
	if (locale === "ru") return ru_jams_first_prize(inputs)
	if (locale === "sv") return sv_jams_first_prize(inputs)
	if (locale === "tr") return tr_jams_first_prize(inputs)
	if (locale === "zh") return zh_jams_first_prize(inputs)
	if (locale === "ja") return ja_jams_first_prize(inputs)
	return en_jams_first_prize(inputs)
});
