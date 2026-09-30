/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_BannerInputs */

const en_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner image URL`)
};

const es_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL de la imagen de banner`)
};

const de_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL des Bannerbilds`)
};

const fr_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL de l'image de bannière`)
};

const it_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL dell'immagine banner`)
};

const nl_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL van de bannerafbeelding`)
};

const pl_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres URL banera`)
};

const pt_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL da imagem do banner`)
};

const ru_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL изображения баннера`)
};

const sv_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL till bannerbild`)
};

const tr_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner görseli URL'si`)
};

const zh_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横幅图片网址`)
};

const ja_jams_editor_banner = /** @type {(inputs: Jams_Editor_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バナー画像のURL`)
};

/**
* | output |
* | --- |
* | "Banner image URL" |
*
* @param {Jams_Editor_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_banner = /** @type {((inputs?: Jams_Editor_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_banner(inputs)
	if (locale === "de") return de_jams_editor_banner(inputs)
	if (locale === "fr") return fr_jams_editor_banner(inputs)
	if (locale === "it") return it_jams_editor_banner(inputs)
	if (locale === "nl") return nl_jams_editor_banner(inputs)
	if (locale === "pl") return pl_jams_editor_banner(inputs)
	if (locale === "pt") return pt_jams_editor_banner(inputs)
	if (locale === "ru") return ru_jams_editor_banner(inputs)
	if (locale === "sv") return sv_jams_editor_banner(inputs)
	if (locale === "tr") return tr_jams_editor_banner(inputs)
	if (locale === "zh") return zh_jams_editor_banner(inputs)
	if (locale === "ja") return ja_jams_editor_banner(inputs)
	return en_jams_editor_banner(inputs)
});
