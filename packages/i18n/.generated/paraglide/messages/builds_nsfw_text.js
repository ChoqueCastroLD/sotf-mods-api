/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Nsfw_TextInputs */

const en_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator marked this build as NSFW. Its pictures are hidden until you choose to see them.`)
};

const es_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El creador marcó esta build como NSFW. Sus imágenes quedan ocultas hasta que decidas verlas.`)
};

const de_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller hat diesen Build als NSFW markiert. Die Bilder bleiben verborgen, bis du sie ansehen willst.`)
};

const fr_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le créateur a marqué cette build comme NSFW. Ses images restent masquées jusqu’à ce que vous choisissiez de les voir.`)
};

const it_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il creatore ha segnato questa build come NSFW. Le immagini restano nascoste finché non scegli di vederle.`)
};

const nl_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker heeft deze build als NSFW gemarkeerd. De afbeeldingen blijven verborgen tot je ervoor kiest ze te bekijken.`)
};

const pl_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca oznaczył ten build jako NSFW. Obrazy pozostaną ukryte, dopóki nie zdecydujesz się ich zobaczyć.`)
};

const pt_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O criador marcou esta build como NSFW. As imagens ficam ocultas até você decidir vê-las.`)
};

const ru_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор отметил эту постройку как NSFW. Изображения скрыты, пока вы не решите их посмотреть.`)
};

const sv_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen har märkt bygget som NSFW. Bilderna är dolda tills du väljer att visa dem.`)
};

const tr_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı bu yapıyı NSFW olarak işaretledi. Görseller, görmeyi seçene kadar gizli kalır.`)
};

const zh_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者将此建筑标记为 NSFW。图片会保持隐藏，直到你选择查看。`)
};

const ja_builds_nsfw_text = /** @type {(inputs: Builds_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターはこの建築を NSFW に設定しています。表示を選ぶまで画像は隠されます。`)
};

/**
* | output |
* | --- |
* | "The creator marked this build as NSFW. Its pictures are hidden until you choose to see them." |
*
* @param {Builds_Nsfw_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_nsfw_text = /** @type {((inputs?: Builds_Nsfw_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Nsfw_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_nsfw_text(inputs)
	if (locale === "de") return de_builds_nsfw_text(inputs)
	if (locale === "fr") return fr_builds_nsfw_text(inputs)
	if (locale === "it") return it_builds_nsfw_text(inputs)
	if (locale === "nl") return nl_builds_nsfw_text(inputs)
	if (locale === "pl") return pl_builds_nsfw_text(inputs)
	if (locale === "pt") return pt_builds_nsfw_text(inputs)
	if (locale === "ru") return ru_builds_nsfw_text(inputs)
	if (locale === "sv") return sv_builds_nsfw_text(inputs)
	if (locale === "tr") return tr_builds_nsfw_text(inputs)
	if (locale === "zh") return zh_builds_nsfw_text(inputs)
	if (locale === "ja") return ja_builds_nsfw_text(inputs)
	return en_builds_nsfw_text(inputs)
});
