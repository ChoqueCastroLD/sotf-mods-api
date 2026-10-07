/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_Publish_TextInputs */

const en_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The comments become visible to everyone and each one is logged.`)
};

const es_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los comentarios serán visibles para todos y cada uno queda registrado.`)
};

const de_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kommentare werden für alle sichtbar und jeder wird protokolliert.`)
};

const fr_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les commentaires deviennent visibles pour tous et chacun est consigné.`)
};

const it_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I commenti diventano visibili a tutti e ognuno viene registrato.`)
};

const nl_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De reacties worden voor iedereen zichtbaar en elke wordt vastgelegd.`)
};

const pl_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze staną się widoczne dla wszystkich, a każdy zostanie zapisany w dzienniku.`)
};

const pt_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os comentários ficam visíveis para todos e cada um fica registrado.`)
};

const ru_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии станут видны всем, каждое действие будет записано.`)
};

const sv_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarerna blir synliga för alla och varje åtgärd loggas.`)
};

const tr_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar herkese görünür olur ve her biri kayda geçer.`)
};

const zh_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论将对所有人可见，每一条都会被记录。`)
};

const ja_ranger_bulk_publish_text = /** @type {(inputs: Ranger_Bulk_Publish_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントは全員に表示され、1 件ごとに記録されます。`)
};

/**
* | output |
* | --- |
* | "The comments become visible to everyone and each one is logged." |
*
* @param {Ranger_Bulk_Publish_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_publish_text = /** @type {((inputs?: Ranger_Bulk_Publish_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Publish_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_publish_text(inputs)
	if (locale === "de") return de_ranger_bulk_publish_text(inputs)
	if (locale === "fr") return fr_ranger_bulk_publish_text(inputs)
	if (locale === "it") return it_ranger_bulk_publish_text(inputs)
	if (locale === "nl") return nl_ranger_bulk_publish_text(inputs)
	if (locale === "pl") return pl_ranger_bulk_publish_text(inputs)
	if (locale === "pt") return pt_ranger_bulk_publish_text(inputs)
	if (locale === "ru") return ru_ranger_bulk_publish_text(inputs)
	if (locale === "sv") return sv_ranger_bulk_publish_text(inputs)
	if (locale === "tr") return tr_ranger_bulk_publish_text(inputs)
	if (locale === "zh") return zh_ranger_bulk_publish_text(inputs)
	if (locale === "ja") return ja_ranger_bulk_publish_text(inputs)
	return en_ranger_bulk_publish_text(inputs)
});
