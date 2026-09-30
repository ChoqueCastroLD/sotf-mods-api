/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_NoneInputs */

const en_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no published mods yet. Publish the mod first, then come back to link it.`)
};

const es_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes mods publicados. Publica el mod primero y vuelve para vincularlo.`)
};

const de_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keine veröffentlichten Mods. Veröffentliche den Mod zuerst und verknüpfe ihn dann hier.`)
};

const fr_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n’avez pas encore de mod publié. Publiez d’abord le mod, puis revenez le lier.`)
};

const it_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora mod pubblicati. Pubblica prima il mod, poi torna a collegarlo.`)
};

const nl_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen gepubliceerde mods. Publiceer eerst de mod en kom terug om hem te koppelen.`)
};

const pl_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz jeszcze opublikowanych modów. Najpierw opublikuj moda, potem wróć, by go powiązać.`)
};

const pt_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não tem mods publicados. Publique o mod primeiro e volte para vinculá-lo.`)
};

const ru_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас пока нет опубликованных модов. Сначала опубликуйте мод, затем вернитесь и привяжите его.`)
};

const sv_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga publicerade moddar än. Publicera modden först och återvänd för att koppla den.`)
};

const tr_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yayımlanmış modunuz yok. Önce modu yayımlayın, sonra gelip bağlayın.`)
};

const zh_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有已发布的模组。请先发布模组，再回来关联。`)
};

const ja_requests_fulfill_none = /** @type {(inputs: Requests_Fulfill_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開済みの MOD がまだありません。先に MOD を公開してから紐付けてください。`)
};

/**
* | output |
* | --- |
* | "You have no published mods yet. Publish the mod first, then come back to link it." |
*
* @param {Requests_Fulfill_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_none = /** @type {((inputs?: Requests_Fulfill_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_none(inputs)
	if (locale === "de") return de_requests_fulfill_none(inputs)
	if (locale === "fr") return fr_requests_fulfill_none(inputs)
	if (locale === "it") return it_requests_fulfill_none(inputs)
	if (locale === "nl") return nl_requests_fulfill_none(inputs)
	if (locale === "pl") return pl_requests_fulfill_none(inputs)
	if (locale === "pt") return pt_requests_fulfill_none(inputs)
	if (locale === "ru") return ru_requests_fulfill_none(inputs)
	if (locale === "sv") return sv_requests_fulfill_none(inputs)
	if (locale === "tr") return tr_requests_fulfill_none(inputs)
	if (locale === "zh") return zh_requests_fulfill_none(inputs)
	if (locale === "ja") return ja_requests_fulfill_none(inputs)
	return en_requests_fulfill_none(inputs)
});
