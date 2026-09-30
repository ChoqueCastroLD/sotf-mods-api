/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Outdated_TextInputs */

const en_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It hasn’t been updated or confirmed since the last game patch that broke mods.`)
};

const es_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha actualizado ni confirmado desde el último parche que rompió mods.`)
};

const de_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seit dem letzten Patch, der Mods kaputt gemacht hat, wurde er weder aktualisiert noch bestätigt.`)
};

const fr_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n’a été ni mis à jour ni confirmé depuis le dernier patch qui a cassé des mods.`)
};

const it_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stata aggiornata né confermata dall’ultima patch che ha rotto le mod.`)
};

const nl_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hij is niet bijgewerkt of bevestigd sinds de laatste patch die mods brak.`)
};

const pl_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie był aktualizowany ani potwierdzony od ostatniej łatki, która psuła mody.`)
};

const pt_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi atualizado nem confirmado desde o último patch que quebrou mods.`)
};

const ru_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод не обновлялся и не подтверждался с последнего патча, который ломал моды.`)
};

const sv_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den har inte uppdaterats eller bekräftats sedan den senaste patchen som förstörde moddar.`)
};

const tr_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan son yamadan beri güncellenmedi veya doğrulanmadı.`)
};

const zh_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自上次导致模组失效的补丁以来，它既没有更新也没有被确认可用。`)
};

const ja_mod_banner_outdated_text = /** @type {(inputs: Mod_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD が壊れた前回のパッチ以降、更新も動作確認もされていません。`)
};

/**
* | output |
* | --- |
* | "It hasn’t been updated or confirmed since the last game patch that broke mods." |
*
* @param {Mod_Banner_Outdated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_outdated_text = /** @type {((inputs?: Mod_Banner_Outdated_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Outdated_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_outdated_text(inputs)
	if (locale === "de") return de_mod_banner_outdated_text(inputs)
	if (locale === "fr") return fr_mod_banner_outdated_text(inputs)
	if (locale === "it") return it_mod_banner_outdated_text(inputs)
	if (locale === "nl") return nl_mod_banner_outdated_text(inputs)
	if (locale === "pl") return pl_mod_banner_outdated_text(inputs)
	if (locale === "pt") return pt_mod_banner_outdated_text(inputs)
	if (locale === "ru") return ru_mod_banner_outdated_text(inputs)
	if (locale === "sv") return sv_mod_banner_outdated_text(inputs)
	if (locale === "tr") return tr_mod_banner_outdated_text(inputs)
	if (locale === "zh") return zh_mod_banner_outdated_text(inputs)
	if (locale === "ja") return ja_mod_banner_outdated_text(inputs)
	return en_mod_banner_outdated_text(inputs)
});
