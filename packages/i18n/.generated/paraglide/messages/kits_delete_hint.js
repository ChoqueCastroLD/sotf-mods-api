/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Delete_HintInputs */

const en_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting frees the address; the code is never reused.`)
};

const es_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al eliminarlo se libera la dirección; el código nunca se reutiliza.`)
};

const de_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beim Löschen wird die Adresse frei; der Code wird nie wieder vergeben.`)
};

const fr_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La suppression libère l’adresse ; le code n’est jamais réutilisé.`)
};

const it_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’eliminazione libera l’indirizzo; il codice non viene mai riutilizzato.`)
};

const nl_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen maakt het adres vrij; de code wordt nooit hergebruikt.`)
};

const pl_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięcie zwalnia adres; kod nigdy nie zostanie użyty ponownie.`)
};

const pt_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir libera o endereço; o código nunca é reutilizado.`)
};

const ru_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После удаления адрес освободится, а код больше никогда не будет выдан.`)
};

const sv_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radering frigör adressen; koden återanvänds aldrig.`)
};

const tr_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silmek adresi serbest bırakır; kod asla yeniden kullanılmaz.`)
};

const zh_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除后地址会被释放，但代码永不复用。`)
};

const ja_kits_delete_hint = /** @type {(inputs: Kits_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除するとアドレスは解放されますが、コードが再利用されることはありません。`)
};

/**
* | output |
* | --- |
* | "Deleting frees the address; the code is never reused." |
*
* @param {Kits_Delete_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_delete_hint = /** @type {((inputs?: Kits_Delete_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Delete_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_delete_hint(inputs)
	if (locale === "de") return de_kits_delete_hint(inputs)
	if (locale === "fr") return fr_kits_delete_hint(inputs)
	if (locale === "it") return it_kits_delete_hint(inputs)
	if (locale === "nl") return nl_kits_delete_hint(inputs)
	if (locale === "pl") return pl_kits_delete_hint(inputs)
	if (locale === "pt") return pt_kits_delete_hint(inputs)
	if (locale === "ru") return ru_kits_delete_hint(inputs)
	if (locale === "sv") return sv_kits_delete_hint(inputs)
	if (locale === "tr") return tr_kits_delete_hint(inputs)
	if (locale === "zh") return zh_kits_delete_hint(inputs)
	if (locale === "ja") return ja_kits_delete_hint(inputs)
	return en_kits_delete_hint(inputs)
});
