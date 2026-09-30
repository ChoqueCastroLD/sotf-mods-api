/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Regions_EmptyInputs */

const en_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The map is still being drawn. Regions appear as mods are published.`)
};

const es_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mapa aún se está dibujando. Las regiones aparecen a medida que se publican mods.`)
};

const de_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Karte wird noch gezeichnet. Regionen erscheinen, sobald Mods veröffentlicht werden.`)
};

const fr_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La carte est encore en cours de tracé. Les régions apparaissent au fil des publications.`)
};

const it_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mappa è ancora in fase di disegno. Le regioni compaiono man mano che vengono pubblicate mod.`)
};

const nl_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kaart wordt nog getekend. Regio’s verschijnen zodra er mods gepubliceerd worden.`)
};

const pl_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa jest wciąż rysowana. Regiony pojawią się wraz z publikacją modów.`)
};

const pt_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mapa ainda está sendo desenhado. As regiões aparecem conforme os mods são publicados.`)
};

const ru_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Карта ещё рисуется. Регионы появятся по мере публикации модов.`)
};

const sv_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartan ritas fortfarande. Regioner dyker upp när moddar publiceras.`)
};

const tr_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harita hâlâ çiziliyor. Modlar yayımlandıkça bölgeler görünecek.`)
};

const zh_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地图仍在绘制中。模组发布后，区域会陆续出现。`)
};

const ja_landing_regions_empty = /** @type {(inputs: Landing_Regions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図はまだ作成中です。MODが公開されると地域が表示されます。`)
};

/**
* | output |
* | --- |
* | "The map is still being drawn. Regions appear as mods are published." |
*
* @param {Landing_Regions_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_regions_empty = /** @type {((inputs?: Landing_Regions_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Regions_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_regions_empty(inputs)
	if (locale === "de") return de_landing_regions_empty(inputs)
	if (locale === "fr") return fr_landing_regions_empty(inputs)
	if (locale === "it") return it_landing_regions_empty(inputs)
	if (locale === "nl") return nl_landing_regions_empty(inputs)
	if (locale === "pl") return pl_landing_regions_empty(inputs)
	if (locale === "pt") return pt_landing_regions_empty(inputs)
	if (locale === "ru") return ru_landing_regions_empty(inputs)
	if (locale === "sv") return sv_landing_regions_empty(inputs)
	if (locale === "tr") return tr_landing_regions_empty(inputs)
	if (locale === "zh") return zh_landing_regions_empty(inputs)
	if (locale === "ja") return ja_landing_regions_empty(inputs)
	return en_landing_regions_empty(inputs)
});
