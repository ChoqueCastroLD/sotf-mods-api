/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_FollowedInputs */

const en_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is in your backpack. You’ll hear about updates.`)
};

const es_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está en tu mochila. Te avisaremos de las actualizaciones.`)
};

const de_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist in deinem Rucksack. Du erfährst von Updates.`)
};

const fr_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est dans votre sac. Vous serez prévenu des mises à jour.`)
};

const it_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} è nel tuo zaino. Ti avviseremo degli aggiornamenti.`)
};

const nl_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zit in je rugzak. Je hoort over updates.`)
};

const pl_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest w twoim plecaku. Dowiesz się o aktualizacjach.`)
};

const pt_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está na sua mochila. Você vai saber das atualizações.`)
};

const ru_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} в вашем рюкзаке. Вы узнаете об обновлениях.`)
};

const sv_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ligger i din ryggsäck. Du får höra om uppdateringar.`)
};

const tr_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sırt çantanda. Güncellemelerden haberin olacak.`)
};

const zh_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已放进你的背包，有更新会通知你。`)
};

const ja_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をバックパックに入れました。更新があればお知らせします。`)
};

/**
* | output |
* | --- |
* | "{name} is in your backpack. You’ll hear about updates." |
*
* @param {Mod_Toast_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_followed = /** @type {((inputs: Mod_Toast_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_followed(inputs)
	if (locale === "de") return de_mod_toast_followed(inputs)
	if (locale === "fr") return fr_mod_toast_followed(inputs)
	if (locale === "it") return it_mod_toast_followed(inputs)
	if (locale === "nl") return nl_mod_toast_followed(inputs)
	if (locale === "pl") return pl_mod_toast_followed(inputs)
	if (locale === "pt") return pt_mod_toast_followed(inputs)
	if (locale === "ru") return ru_mod_toast_followed(inputs)
	if (locale === "sv") return sv_mod_toast_followed(inputs)
	if (locale === "tr") return tr_mod_toast_followed(inputs)
	if (locale === "zh") return zh_mod_toast_followed(inputs)
	if (locale === "ja") return ja_mod_toast_followed(inputs)
	return en_mod_toast_followed(inputs)
});
