/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_FollowedInputs */

const en_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added to your Backpack.`)
};

const es_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadida a tu Mochila.`)
};

const de_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu deinem Rucksack hinzugefügt.`)
};

const fr_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutée à votre sac à dos.`)
};

const it_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunta al tuo zaino.`)
};

const nl_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegevoegd aan je rugzak.`)
};

const pl_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodano do plecaka.`)
};

const pt_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionada à sua mochila.`)
};

const ru_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлено в рюкзак.`)
};

const sv_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillagt i din ryggsäck.`)
};

const tr_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantana eklendi.`)
};

const zh_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已加入你的背包。`)
};

const ja_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックに追加しました。`)
};

/**
* | output |
* | --- |
* | "Added to your Backpack." |
*
* @param {Builds_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_followed = /** @type {((inputs?: Builds_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_followed(inputs)
	if (locale === "de") return de_builds_followed(inputs)
	if (locale === "fr") return fr_builds_followed(inputs)
	if (locale === "it") return it_builds_followed(inputs)
	if (locale === "nl") return nl_builds_followed(inputs)
	if (locale === "pl") return pl_builds_followed(inputs)
	if (locale === "pt") return pt_builds_followed(inputs)
	if (locale === "ru") return ru_builds_followed(inputs)
	if (locale === "sv") return sv_builds_followed(inputs)
	if (locale === "tr") return tr_builds_followed(inputs)
	if (locale === "zh") return zh_builds_followed(inputs)
	if (locale === "ja") return ja_builds_followed(inputs)
	return en_builds_followed(inputs)
});
