/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Description_HintInputs */

const en_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What it does, how to use it, known issues. Headings, lists, images and YouTube links work.`)
};

const es_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué hace, cómo se usa y problemas conocidos. Funcionan encabezados, listas, imágenes y enlaces de YouTube.`)
};

const de_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was er macht, wie man ihn nutzt, bekannte Probleme. Überschriften, Listen, Bilder und YouTube-Links funktionieren.`)
};

const fr_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qu’il fait, comment l’utiliser, problèmes connus. Titres, listes, images et liens YouTube fonctionnent.`)
};

const it_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa fa, come si usa, problemi noti. Funzionano titoli, elenchi, immagini e link di YouTube.`)
};

const nl_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat hij doet, hoe je hem gebruikt, bekende problemen. Koppen, lijsten, afbeeldingen en YouTube-links werken.`)
};

const pl_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co robi, jak go używać, znane problemy. Działają nagłówki, listy, obrazy i linki do YouTube.`)
};

const pt_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que ele faz, como usar, problemas conhecidos. Títulos, listas, imagens e links do YouTube funcionam.`)
};

const ru_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что он делает, как им пользоваться, известные проблемы. Работают заголовки, списки, картинки и ссылки на YouTube.`)
};

const sv_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad den gör, hur man använder den, kända problem. Rubriker, listor, bilder och YouTube-länkar fungerar.`)
};

const tr_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne yaptığı, nasıl kullanıldığı, bilinen sorunlar. Başlıklar, listeler, görseller ve YouTube bağlantıları çalışır.`)
};

const zh_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它的功能、用法和已知问题。支持标题、列表、图片和 YouTube 链接。`)
};

const ja_upload_description_hint = /** @type {(inputs: Upload_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機能、使い方、既知の問題など。見出し、リスト、画像、YouTubeリンクが使えます。`)
};

/**
* | output |
* | --- |
* | "What it does, how to use it, known issues. Headings, lists, images and YouTube links work." |
*
* @param {Upload_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_description_hint = /** @type {((inputs?: Upload_Description_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Description_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_description_hint(inputs)
	if (locale === "de") return de_upload_description_hint(inputs)
	if (locale === "fr") return fr_upload_description_hint(inputs)
	if (locale === "it") return it_upload_description_hint(inputs)
	if (locale === "nl") return nl_upload_description_hint(inputs)
	if (locale === "pl") return pl_upload_description_hint(inputs)
	if (locale === "pt") return pt_upload_description_hint(inputs)
	if (locale === "ru") return ru_upload_description_hint(inputs)
	if (locale === "sv") return sv_upload_description_hint(inputs)
	if (locale === "tr") return tr_upload_description_hint(inputs)
	if (locale === "zh") return zh_upload_description_hint(inputs)
	if (locale === "ja") return ja_upload_description_hint(inputs)
	return en_upload_description_hint(inputs)
});
