/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Trending_EmptyInputs */

const en_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A quiet week on the island. Mods show up here as survivors download them.`)
};

const es_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana tranquila en la isla. Los mods aparecen aquí a medida que los supervivientes los descargan.`)
};

const de_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine ruhige Woche auf der Insel. Mods erscheinen hier, sobald Überlebende sie herunterladen.`)
};

const fr_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semaine calme sur l’île. Les mods apparaissent ici à mesure que les survivants les téléchargent.`)
};

const it_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settimana tranquilla sull’isola. Le mod compaiono qui man mano che i sopravvissuti le scaricano.`)
};

const nl_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een rustige week op het eiland. Mods verschijnen hier zodra overlevenden ze downloaden.`)
};

const pl_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spokojny tydzień na wyspie. Mody pojawią się tu, gdy ocaleni zaczną je pobierać.`)
};

const pt_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana tranquila na ilha. Os mods aparecem aqui conforme os sobreviventes os baixam.`)
};

const ru_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тихая неделя на острове. Моды появятся здесь, когда выжившие начнут их скачивать.`)
};

const sv_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En lugn vecka på ön. Moddar dyker upp här när överlevare laddar ned dem.`)
};

const tr_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada sakin bir hafta. Hayatta kalanlar indirdikçe modlar burada görünecek.`)
};

const zh_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛上这周很安静。幸存者下载模组后，它们会出现在这里。`)
};

const ja_landing_trending_empty = /** @type {(inputs: Landing_Trending_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島は静かな一週間です。サバイバーがダウンロードすると、ここにMODが表示されます。`)
};

/**
* | output |
* | --- |
* | "A quiet week on the island. Mods show up here as survivors download them." |
*
* @param {Landing_Trending_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_trending_empty = /** @type {((inputs?: Landing_Trending_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Trending_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_trending_empty(inputs)
	if (locale === "de") return de_landing_trending_empty(inputs)
	if (locale === "fr") return fr_landing_trending_empty(inputs)
	if (locale === "it") return it_landing_trending_empty(inputs)
	if (locale === "nl") return nl_landing_trending_empty(inputs)
	if (locale === "pl") return pl_landing_trending_empty(inputs)
	if (locale === "pt") return pt_landing_trending_empty(inputs)
	if (locale === "ru") return ru_landing_trending_empty(inputs)
	if (locale === "sv") return sv_landing_trending_empty(inputs)
	if (locale === "tr") return tr_landing_trending_empty(inputs)
	if (locale === "zh") return zh_landing_trending_empty(inputs)
	if (locale === "ja") return ja_landing_trending_empty(inputs)
	return en_landing_trending_empty(inputs)
});
