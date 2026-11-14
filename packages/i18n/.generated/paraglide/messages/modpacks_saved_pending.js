/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Saved_PendingInputs */

const en_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack saved. A moderator will review it before it is published.`)
};

const es_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack guardado. Un moderador lo revisará antes de publicarlo.`)
};

const de_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack gespeichert. Ein Moderator prüft es vor der Veröffentlichung.`)
};

const fr_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack enregistré. Un modérateur l’examinera avant sa publication.`)
};

const it_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack salvato. Un moderatore lo esaminerà prima della pubblicazione.`)
};

const nl_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack opgeslagen. Een moderator bekijkt hem voordat hij wordt gepubliceerd.`)
};

const pl_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano modpack. Moderator sprawdzi go przed publikacją.`)
};

const pt_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack salvo. Um moderador vai revisá-lo antes da publicação.`)
};

const ru_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпак сохранён. Модератор проверит его перед публикацией.`)
};

const sv_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaketet sparades. En moderator granskar det innan det publiceras.`)
};

const tr_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi kaydedildi. Yayınlanmadan önce bir moderatör inceleyecek.`)
};

const zh_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包已保存。版主审核后才会发布。`)
};

const ja_modpacks_saved_pending = /** @type {(inputs: Modpacks_Saved_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを保存しました。公開前にモデレーターが確認します。`)
};

/**
* | output |
* | --- |
* | "Modpack saved. A moderator will review it before it is published." |
*
* @param {Modpacks_Saved_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_saved_pending = /** @type {((inputs?: Modpacks_Saved_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Saved_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_saved_pending(inputs)
	if (locale === "de") return de_modpacks_saved_pending(inputs)
	if (locale === "fr") return fr_modpacks_saved_pending(inputs)
	if (locale === "it") return it_modpacks_saved_pending(inputs)
	if (locale === "nl") return nl_modpacks_saved_pending(inputs)
	if (locale === "pl") return pl_modpacks_saved_pending(inputs)
	if (locale === "pt") return pt_modpacks_saved_pending(inputs)
	if (locale === "ru") return ru_modpacks_saved_pending(inputs)
	if (locale === "sv") return sv_modpacks_saved_pending(inputs)
	if (locale === "tr") return tr_modpacks_saved_pending(inputs)
	if (locale === "zh") return zh_modpacks_saved_pending(inputs)
	if (locale === "ja") return ja_modpacks_saved_pending(inputs)
	return en_modpacks_saved_pending(inputs)
});
