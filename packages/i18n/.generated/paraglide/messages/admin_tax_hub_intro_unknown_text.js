/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Hub_Intro_Unknown_TextInputs */

const en_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The API doesn’t return it yet. Saving replaces it with what you enter here (empty removes it).`)
};

const es_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La API aún no la devuelve. Al guardar se sustituye por lo que escribas aquí (vacío la elimina).`)
};

const de_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die API liefert sie noch nicht. Beim Speichern wird sie durch deine Eingabe ersetzt (leer entfernt sie).`)
};

const fr_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’API ne la renvoie pas encore. L’enregistrement la remplace par ce que vous saisissez ici (vide la supprime).`)
};

const it_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’API non la restituisce ancora. Salvando viene sostituita da ciò che scrivi qui (vuoto la elimina).`)
};

const nl_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De API geeft haar nog niet terug. Opslaan vervangt haar door wat je hier invult (leeg verwijdert haar).`)
};

const pl_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API jeszcze go nie zwraca. Zapisanie zastąpi go tym, co tu wpiszesz (puste pole go usunie).`)
};

const pt_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A API ainda não a retorna. Salvar a substitui pelo que você escrever aqui (vazio a remove).`)
};

const ru_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API пока его не возвращает. При сохранении оно заменится тем, что вы введёте здесь (пустое поле удалит его).`)
};

const sv_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API:et returnerar det inte än. När du sparar ersätts det med det du skriver här (tomt tar bort det).`)
};

const tr_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API bunu henüz döndürmüyor. Kaydetmek, buraya yazdığınla değiştirir (boş bırakmak siler).`)
};

const zh_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 尚未返回该内容。保存后会被这里填写的内容替换（留空则删除）。`)
};

const ja_admin_tax_hub_intro_unknown_text = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API がまだ返しません。保存すると、ここに入力した内容に置き換わります（空欄なら削除）。`)
};

/**
* | output |
* | --- |
* | "The API doesn’t return it yet. Saving replaces it with what you enter here (empty removes it)." |
*
* @param {Admin_Tax_Hub_Intro_Unknown_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_hub_intro_unknown_text = /** @type {((inputs?: Admin_Tax_Hub_Intro_Unknown_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Hub_Intro_Unknown_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "de") return de_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "fr") return fr_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "it") return it_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "nl") return nl_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "pl") return pl_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "pt") return pt_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "ru") return ru_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "sv") return sv_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "tr") return tr_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "zh") return zh_admin_tax_hub_intro_unknown_text(inputs)
	if (locale === "ja") return ja_admin_tax_hub_intro_unknown_text(inputs)
	return en_admin_tax_hub_intro_unknown_text(inputs)
});
