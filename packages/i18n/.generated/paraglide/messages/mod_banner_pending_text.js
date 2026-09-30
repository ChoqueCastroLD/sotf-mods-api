/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Pending_TextInputs */

const en_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ranger is checking this mod. It isn’t listed yet and may still change.`)
};

const es_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger está revisando este mod. Todavía no aparece en los listados y puede cambiar.`)
};

const de_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Ranger prüft diesen Mod. Er ist noch nicht gelistet und kann sich noch ändern.`)
};

const fr_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger vérifie ce mod. Il n’est pas encore listé et peut encore changer.`)
};

const it_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger sta controllando questa mod. Non è ancora nelle liste e può cambiare.`)
};

const nl_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een ranger controleert deze mod. Hij staat nog niet in de lijsten en kan nog veranderen.`)
};

const pl_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger sprawdza ten mod. Nie ma go jeszcze na listach i może się zmienić.`)
};

const pt_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um ranger está verificando este mod. Ele ainda não aparece nas listas e pode mudar.`)
};

const ru_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджер проверяет этот мод. Его ещё нет в списках, и он может измениться.`)
};

const sv_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ranger kontrollerar den här moden. Den är inte listad än och kan fortfarande ändras.`)
};

const tr_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir korucu bu modu kontrol ediyor. Henüz listelerde yok ve değişebilir.`)
};

const zh_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员正在检查此模组。它还未出现在列表中，内容可能还会变化。`)
};

const ja_mod_banner_pending_text = /** @type {(inputs: Mod_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーがこの MOD を確認しています。まだ一覧には表示されず、内容が変わることもあります。`)
};

/**
* | output |
* | --- |
* | "A ranger is checking this mod. It isn’t listed yet and may still change." |
*
* @param {Mod_Banner_Pending_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_pending_text = /** @type {((inputs?: Mod_Banner_Pending_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Pending_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_pending_text(inputs)
	if (locale === "de") return de_mod_banner_pending_text(inputs)
	if (locale === "fr") return fr_mod_banner_pending_text(inputs)
	if (locale === "it") return it_mod_banner_pending_text(inputs)
	if (locale === "nl") return nl_mod_banner_pending_text(inputs)
	if (locale === "pl") return pl_mod_banner_pending_text(inputs)
	if (locale === "pt") return pt_mod_banner_pending_text(inputs)
	if (locale === "ru") return ru_mod_banner_pending_text(inputs)
	if (locale === "sv") return sv_mod_banner_pending_text(inputs)
	if (locale === "tr") return tr_mod_banner_pending_text(inputs)
	if (locale === "zh") return zh_mod_banner_pending_text(inputs)
	if (locale === "ja") return ja_mod_banner_pending_text(inputs)
	return en_mod_banner_pending_text(inputs)
});
