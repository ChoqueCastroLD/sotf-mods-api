/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Matrix_DescriptionInputs */

const en_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each change is saved at once. Add a note when something only partly works.`)
};

const es_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada cambio se guarda al momento. Añade una nota cuando algo funcione solo en parte.`)
};

const de_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Änderung wird sofort gespeichert. Füge eine Notiz hinzu, wenn etwas nur teilweise funktioniert.`)
};

const fr_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque modification est enregistrée aussitôt. Ajoutez une note quand quelque chose ne fonctionne qu’en partie.`)
};

const it_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni modifica si salva subito. Aggiungi una nota quando qualcosa funziona solo in parte.`)
};

const nl_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke wijziging wordt meteen opgeslagen. Voeg een notitie toe als iets maar deels werkt.`)
};

const pl_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda zmiana zapisuje się od razu. Dodaj notatkę, gdy coś działa tylko częściowo.`)
};

const pt_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada alteração é salva na hora. Adicione uma nota quando algo funcionar só em parte.`)
};

const ru_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждое изменение сохраняется сразу. Добавьте заметку, если что-то работает лишь частично.`)
};

const sv_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje ändring sparas direkt. Lägg till en anteckning när något bara delvis fungerar.`)
};

const tr_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her değişiklik anında kaydedilir. Bir şey yalnızca kısmen çalışıyorsa not ekle.`)
};

const zh_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每项更改会立即保存。如果只是部分可用，请添加说明。`)
};

const ja_admin_eco_matrix_description = /** @type {(inputs: Admin_Eco_Matrix_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更はすぐに保存されます。一部しか動かない場合はメモを追加してください。`)
};

/**
* | output |
* | --- |
* | "Each change is saved at once. Add a note when something only partly works." |
*
* @param {Admin_Eco_Matrix_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_matrix_description = /** @type {((inputs?: Admin_Eco_Matrix_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Matrix_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_matrix_description(inputs)
	if (locale === "de") return de_admin_eco_matrix_description(inputs)
	if (locale === "fr") return fr_admin_eco_matrix_description(inputs)
	if (locale === "it") return it_admin_eco_matrix_description(inputs)
	if (locale === "nl") return nl_admin_eco_matrix_description(inputs)
	if (locale === "pl") return pl_admin_eco_matrix_description(inputs)
	if (locale === "pt") return pt_admin_eco_matrix_description(inputs)
	if (locale === "ru") return ru_admin_eco_matrix_description(inputs)
	if (locale === "sv") return sv_admin_eco_matrix_description(inputs)
	if (locale === "tr") return tr_admin_eco_matrix_description(inputs)
	if (locale === "zh") return zh_admin_eco_matrix_description(inputs)
	if (locale === "ja") return ja_admin_eco_matrix_description(inputs)
	return en_admin_eco_matrix_description(inputs)
});
