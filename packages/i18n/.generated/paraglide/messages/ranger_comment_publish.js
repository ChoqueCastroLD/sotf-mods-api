/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_PublishInputs */

const en_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish`)
};

const es_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar`)
};

const de_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichen`)
};

const fr_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier`)
};

const it_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica`)
};

const nl_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceren`)
};

const pl_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj`)
};

const pt_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar`)
};

const ru_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать`)
};

const sv_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera`)
};

const tr_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımla`)
};

const zh_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布`)
};

const ja_ranger_comment_publish = /** @type {(inputs: Ranger_Comment_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開`)
};

/**
* | output |
* | --- |
* | "Publish" |
*
* @param {Ranger_Comment_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_publish = /** @type {((inputs?: Ranger_Comment_PublishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_PublishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_publish(inputs)
	if (locale === "de") return de_ranger_comment_publish(inputs)
	if (locale === "fr") return fr_ranger_comment_publish(inputs)
	if (locale === "it") return it_ranger_comment_publish(inputs)
	if (locale === "nl") return nl_ranger_comment_publish(inputs)
	if (locale === "pl") return pl_ranger_comment_publish(inputs)
	if (locale === "pt") return pt_ranger_comment_publish(inputs)
	if (locale === "ru") return ru_ranger_comment_publish(inputs)
	if (locale === "sv") return sv_ranger_comment_publish(inputs)
	if (locale === "tr") return tr_ranger_comment_publish(inputs)
	if (locale === "zh") return zh_ranger_comment_publish(inputs)
	if (locale === "ja") return ja_ranger_comment_publish(inputs)
	return en_ranger_comment_publish(inputs)
});
