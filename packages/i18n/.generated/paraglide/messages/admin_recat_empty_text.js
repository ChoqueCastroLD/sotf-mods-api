/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Empty_TextInputs */

const en_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mod needs a new category. Import a CSV to review other changes.`)
};

const es_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod necesita categoría nueva. Importa un CSV para revisar otros cambios.`)
};

const de_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod braucht eine neue Kategorie. Importiere eine CSV, um andere Änderungen zu prüfen.`)
};

const fr_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod n’a besoin d’une nouvelle catégorie. Importez un CSV pour examiner d’autres changements.`)
};

const it_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod ha bisogno di una nuova categoria. Importa un CSV per esaminare altre modifiche.`)
};

const nl_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele mod heeft een nieuwe categorie nodig. Importeer een CSV om andere wijzigingen te bekijken.`)
};

const pl_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie potrzebuje nowej kategorii. Zaimportuj CSV, aby przejrzeć inne zmiany.`)
};

const pt_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod precisa de nova categoria. Importe um CSV para revisar outras alterações.`)
};

const ru_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни одному моду не нужна новая категория. Импортируйте CSV, чтобы проверить другие изменения.`)
};

const sv_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen modd behöver en ny kategori. Importera en CSV för att granska andra ändringar.`)
};

const tr_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiçbir modun yeni kategoriye ihtiyacı yok. Başka değişiklikleri incelemek için bir CSV içe aktar.`)
};

const zh_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有模组需要新分类。导入 CSV 以检查其他更改。`)
};

const ja_admin_recat_empty_text = /** @type {(inputs: Admin_Recat_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいカテゴリーが必要な MOD はありません。ほかの変更を確認するには CSV をインポートしてください。`)
};

/**
* | output |
* | --- |
* | "No mod needs a new category. Import a CSV to review other changes." |
*
* @param {Admin_Recat_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_empty_text = /** @type {((inputs?: Admin_Recat_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_empty_text(inputs)
	if (locale === "de") return de_admin_recat_empty_text(inputs)
	if (locale === "fr") return fr_admin_recat_empty_text(inputs)
	if (locale === "it") return it_admin_recat_empty_text(inputs)
	if (locale === "nl") return nl_admin_recat_empty_text(inputs)
	if (locale === "pl") return pl_admin_recat_empty_text(inputs)
	if (locale === "pt") return pt_admin_recat_empty_text(inputs)
	if (locale === "ru") return ru_admin_recat_empty_text(inputs)
	if (locale === "sv") return sv_admin_recat_empty_text(inputs)
	if (locale === "tr") return tr_admin_recat_empty_text(inputs)
	if (locale === "zh") return zh_admin_recat_empty_text(inputs)
	if (locale === "ja") return ja_admin_recat_empty_text(inputs)
	return en_admin_recat_empty_text(inputs)
});
