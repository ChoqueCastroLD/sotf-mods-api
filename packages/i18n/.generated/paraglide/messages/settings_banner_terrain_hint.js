/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_Terrain_HintInputs */

const en_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A map drawn just for you. Reroll it until you like the shape of your island.`)
};

const es_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mapa dibujado solo para ti. Genera otro hasta que te guste la forma de tu isla.`)
};

const de_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Karte, nur für dich gezeichnet. Würfle neu, bis dir die Form deiner Insel gefällt.`)
};

const fr_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une carte dessinée rien que pour vous. Générez-en d’autres jusqu’à aimer la forme de votre île.`)
};

const it_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una mappa disegnata solo per te. Generane altre finché la forma della tua isola non ti piace.`)
};

const nl_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een kaart die speciaal voor jou is getekend. Genereer opnieuw tot je de vorm van je eiland mooi vindt.`)
};

const pl_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa narysowana specjalnie dla ciebie. Losuj, aż spodoba ci się kształt twojej wyspy.`)
};

const pt_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mapa desenhado só para você. Gere outros até gostar do formato da sua ilha.`)
};

const ru_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Карта, нарисованная специально для вас. Генерируйте заново, пока форма острова не понравится.`)
};

const sv_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En karta ritad bara för dig. Slumpa om tills du gillar formen på din ö.`)
};

const tr_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sadece senin için çizilmiş bir harita. Adanın şeklini beğenene kadar yeniden oluştur.`)
};

const zh_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一张专为你绘制的地图。不断重新生成，直到你喜欢自己岛屿的形状。`)
};

const ja_settings_banner_terrain_hint = /** @type {(inputs: Settings_Banner_Terrain_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなただけのために描かれた地図です。島の形が気に入るまで作り直せます。`)
};

/**
* | output |
* | --- |
* | "A map drawn just for you. Reroll it until you like the shape of your island." |
*
* @param {Settings_Banner_Terrain_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_terrain_hint = /** @type {((inputs?: Settings_Banner_Terrain_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Terrain_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_terrain_hint(inputs)
	if (locale === "de") return de_settings_banner_terrain_hint(inputs)
	if (locale === "fr") return fr_settings_banner_terrain_hint(inputs)
	if (locale === "it") return it_settings_banner_terrain_hint(inputs)
	if (locale === "nl") return nl_settings_banner_terrain_hint(inputs)
	if (locale === "pl") return pl_settings_banner_terrain_hint(inputs)
	if (locale === "pt") return pt_settings_banner_terrain_hint(inputs)
	if (locale === "ru") return ru_settings_banner_terrain_hint(inputs)
	if (locale === "sv") return sv_settings_banner_terrain_hint(inputs)
	if (locale === "tr") return tr_settings_banner_terrain_hint(inputs)
	if (locale === "zh") return zh_settings_banner_terrain_hint(inputs)
	if (locale === "ja") return ja_settings_banner_terrain_hint(inputs)
	return en_settings_banner_terrain_hint(inputs)
});
