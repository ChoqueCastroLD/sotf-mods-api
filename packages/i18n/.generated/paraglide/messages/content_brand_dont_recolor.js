/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Dont_RecolorInputs */

const en_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolour, outline or add effects to the logo.`)
};

const es_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No cambies los colores del logo ni le añadas contornos o efectos.`)
};

const de_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Logo umfärben, umranden oder mit Effekten versehen.`)
};

const fr_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolorer le logo, le détourer ou lui ajouter des effets.`)
};

const it_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ricolorare il logo e non aggiungere contorni o effetti.`)
};

const nl_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het logo niet herkleuren, omlijnen of voorzien van effecten.`)
};

const pl_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie zmieniaj kolorów logo ani nie dodawaj obrysów i efektów.`)
};

const pt_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não mude as cores do logo nem adicione contornos ou efeitos.`)
};

const ru_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перекрашивать логотип, обводить его или добавлять эффекты.`)
};

const sv_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att färga om logotypen eller lägga till konturer och effekter.`)
};

const tr_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logonun rengini değiştirme, kontur veya efekt ekleme.`)
};

const zh_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不要给标志改色、加描边或添加特效。`)
};

const ja_content_brand_dont_recolor = /** @type {(inputs: Content_Brand_Dont_RecolorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロゴの色を変えたり、縁取りや効果を加えたりしないでください。`)
};

/**
* | output |
* | --- |
* | "Recolour, outline or add effects to the logo." |
*
* @param {Content_Brand_Dont_RecolorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_dont_recolor = /** @type {((inputs?: Content_Brand_Dont_RecolorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_RecolorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_dont_recolor(inputs)
	if (locale === "de") return de_content_brand_dont_recolor(inputs)
	if (locale === "fr") return fr_content_brand_dont_recolor(inputs)
	if (locale === "it") return it_content_brand_dont_recolor(inputs)
	if (locale === "nl") return nl_content_brand_dont_recolor(inputs)
	if (locale === "pl") return pl_content_brand_dont_recolor(inputs)
	if (locale === "pt") return pt_content_brand_dont_recolor(inputs)
	if (locale === "ru") return ru_content_brand_dont_recolor(inputs)
	if (locale === "sv") return sv_content_brand_dont_recolor(inputs)
	if (locale === "tr") return tr_content_brand_dont_recolor(inputs)
	if (locale === "zh") return zh_content_brand_dont_recolor(inputs)
	if (locale === "ja") return ja_content_brand_dont_recolor(inputs)
	return en_content_brand_dont_recolor(inputs)
});
