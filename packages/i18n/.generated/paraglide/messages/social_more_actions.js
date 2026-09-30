/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Social_More_ActionsInputs */

const en_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More actions for ${i?.name}’s post`)
};

const es_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Más acciones para la publicación de ${i?.name}`)
};

const de_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weitere Aktionen für den Beitrag von ${i?.name}`)
};

const fr_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plus d’actions pour le message de ${i?.name}`)
};

const it_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Altre azioni per il post di ${i?.name}`)
};

const nl_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meer acties voor het bericht van ${i?.name}`)
};

const pl_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Więcej działań dla wpisu: ${i?.name}`)
};

const pt_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais ações para a publicação de ${i?.name}`)
};

const ru_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Другие действия с записью: ${i?.name}`)
};

const sv_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fler åtgärder för inlägget av ${i?.name}`)
};

const tr_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} gönderisi için diğer işlemler`)
};

const zh_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的帖子的更多操作`)
};

const ja_social_more_actions = /** @type {(inputs: Social_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} さんの投稿のその他の操作`)
};

/**
* | output |
* | --- |
* | "More actions for {name}’s post" |
*
* @param {Social_More_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_more_actions = /** @type {((inputs: Social_More_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_More_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_more_actions(inputs)
	if (locale === "de") return de_social_more_actions(inputs)
	if (locale === "fr") return fr_social_more_actions(inputs)
	if (locale === "it") return it_social_more_actions(inputs)
	if (locale === "nl") return nl_social_more_actions(inputs)
	if (locale === "pl") return pl_social_more_actions(inputs)
	if (locale === "pt") return pt_social_more_actions(inputs)
	if (locale === "ru") return ru_social_more_actions(inputs)
	if (locale === "sv") return sv_social_more_actions(inputs)
	if (locale === "tr") return tr_social_more_actions(inputs)
	if (locale === "zh") return zh_social_more_actions(inputs)
	if (locale === "ja") return ja_social_more_actions(inputs)
	return en_social_more_actions(inputs)
});
