/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_Publish_TitleInputs */

const en_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish the selected comments?`)
};

const es_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Publicar los comentarios seleccionados?`)
};

const de_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgewählte Kommentare veröffentlichen?`)
};

const fr_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier les commentaires sélectionnés ?`)
};

const it_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicare i commenti selezionati?`)
};

const nl_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geselecteerde reacties publiceren?`)
};

const pl_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikować wybrane komentarze?`)
};

const pt_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar os comentários selecionados?`)
};

const ru_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать выбранные комментарии?`)
};

const sv_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera de valda kommentarerna?`)
};

const tr_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçilen yorumlar yayımlansın mı?`)
};

const zh_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布所选评论？`)
};

const ja_ranger_bulk_publish_title = /** @type {(inputs: Ranger_Bulk_Publish_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択したコメントを公開しますか？`)
};

/**
* | output |
* | --- |
* | "Publish the selected comments?" |
*
* @param {Ranger_Bulk_Publish_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_publish_title = /** @type {((inputs?: Ranger_Bulk_Publish_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Publish_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_publish_title(inputs)
	if (locale === "de") return de_ranger_bulk_publish_title(inputs)
	if (locale === "fr") return fr_ranger_bulk_publish_title(inputs)
	if (locale === "it") return it_ranger_bulk_publish_title(inputs)
	if (locale === "nl") return nl_ranger_bulk_publish_title(inputs)
	if (locale === "pl") return pl_ranger_bulk_publish_title(inputs)
	if (locale === "pt") return pt_ranger_bulk_publish_title(inputs)
	if (locale === "ru") return ru_ranger_bulk_publish_title(inputs)
	if (locale === "sv") return sv_ranger_bulk_publish_title(inputs)
	if (locale === "tr") return tr_ranger_bulk_publish_title(inputs)
	if (locale === "zh") return zh_ranger_bulk_publish_title(inputs)
	if (locale === "ja") return ja_ranger_bulk_publish_title(inputs)
	return en_ranger_bulk_publish_title(inputs)
});
