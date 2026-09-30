/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Gallery_PlaceholderInputs */

const en_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pictures yet. The blueprint had no embedded thumbnail.`)
};

const es_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay imágenes. El plano no traía miniatura.`)
};

const de_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bilder. Der Bauplan enthielt kein Vorschaubild.`)
};

const fr_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’images. Le plan ne contenait pas de miniature.`)
};

const it_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna immagine. Il progetto non conteneva una miniatura.`)
};

const nl_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen afbeeldingen. De bouwtekening bevatte geen miniatuur.`)
};

const pl_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak obrazów. Plan nie zawierał miniatury.`)
};

const pt_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há imagens. A planta não trazia miniatura.`)
};

const ru_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображений пока нет. В чертеже не было миниатюры.`)
};

const sv_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga bilder än. Ritningen hade ingen miniatyrbild.`)
};

const tr_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz görsel yok. Planda gömülü bir küçük resim yoktu.`)
};

const zh_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无图片。蓝图中没有内嵌缩略图。`)
};

const ja_builds_gallery_placeholder = /** @type {(inputs: Builds_Gallery_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像はまだありません。設計図にサムネイルが含まれていませんでした。`)
};

/**
* | output |
* | --- |
* | "No pictures yet. The blueprint had no embedded thumbnail." |
*
* @param {Builds_Gallery_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_gallery_placeholder = /** @type {((inputs?: Builds_Gallery_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Gallery_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_gallery_placeholder(inputs)
	if (locale === "de") return de_builds_gallery_placeholder(inputs)
	if (locale === "fr") return fr_builds_gallery_placeholder(inputs)
	if (locale === "it") return it_builds_gallery_placeholder(inputs)
	if (locale === "nl") return nl_builds_gallery_placeholder(inputs)
	if (locale === "pl") return pl_builds_gallery_placeholder(inputs)
	if (locale === "pt") return pt_builds_gallery_placeholder(inputs)
	if (locale === "ru") return ru_builds_gallery_placeholder(inputs)
	if (locale === "sv") return sv_builds_gallery_placeholder(inputs)
	if (locale === "tr") return tr_builds_gallery_placeholder(inputs)
	if (locale === "zh") return zh_builds_gallery_placeholder(inputs)
	if (locale === "ja") return ja_builds_gallery_placeholder(inputs)
	return en_builds_gallery_placeholder(inputs)
});
