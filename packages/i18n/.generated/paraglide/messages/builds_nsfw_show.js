/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Nsfw_ShowInputs */

const en_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show pictures`)
};

const es_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver imágenes`)
};

const de_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder anzeigen`)
};

const fr_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher les images`)
};

const it_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra immagini`)
};

const nl_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen tonen`)
};

const pl_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż obrazy`)
};

const pt_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar imagens`)
};

const ru_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать изображения`)
};

const sv_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa bilder`)
};

const tr_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görselleri göster`)
};

const zh_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示图片`)
};

const ja_builds_nsfw_show = /** @type {(inputs: Builds_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を表示`)
};

/**
* | output |
* | --- |
* | "Show pictures" |
*
* @param {Builds_Nsfw_ShowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_nsfw_show = /** @type {((inputs?: Builds_Nsfw_ShowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Nsfw_ShowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_nsfw_show(inputs)
	if (locale === "de") return de_builds_nsfw_show(inputs)
	if (locale === "fr") return fr_builds_nsfw_show(inputs)
	if (locale === "it") return it_builds_nsfw_show(inputs)
	if (locale === "nl") return nl_builds_nsfw_show(inputs)
	if (locale === "pl") return pl_builds_nsfw_show(inputs)
	if (locale === "pt") return pt_builds_nsfw_show(inputs)
	if (locale === "ru") return ru_builds_nsfw_show(inputs)
	if (locale === "sv") return sv_builds_nsfw_show(inputs)
	if (locale === "tr") return tr_builds_nsfw_show(inputs)
	if (locale === "zh") return zh_builds_nsfw_show(inputs)
	if (locale === "ja") return ja_builds_nsfw_show(inputs)
	return en_builds_nsfw_show(inputs)
});
