/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_SlowInputs */

const en_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The check is taking longer than usual. The status above updates when it finishes.`)
};

const es_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La consulta tarda más de lo normal. El estado de arriba se actualiza cuando termine.`)
};

const de_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Prüfung dauert länger als sonst. Der Status oben wird aktualisiert, sobald sie fertig ist.`)
};

const fr_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vérification prend plus de temps que d’habitude. L’état ci-dessus se met à jour dès qu’elle se termine.`)
};

const it_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il controllo sta richiedendo più tempo del solito. Lo stato qui sopra si aggiorna al termine.`)
};

const nl_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De controle duurt langer dan normaal. De status hierboven wordt bijgewerkt zodra ze klaar is.`)
};

const pl_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie trwa dłużej niż zwykle. Status powyżej odświeży się po jego zakończeniu.`)
};

const pt_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação está demorando mais que o normal. O status acima é atualizado quando ela terminar.`)
};

const ru_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка идёт дольше обычного. Статус выше обновится, когда она закончится.`)
};

const sv_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollen tar längre tid än vanligt. Statusen ovan uppdateras när den är klar.`)
};

const tr_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrol her zamankinden uzun sürüyor. Bittiğinde yukarıdaki durum güncellenir.`)
};

const zh_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查耗时比平时长。完成后上方的状态会更新。`)
};

const ja_admin_builds_sync_slow = /** @type {(inputs: Admin_Builds_Sync_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認に通常より時間がかかっています。終わると上の状態が更新されます。`)
};

/**
* | output |
* | --- |
* | "The check is taking longer than usual. The status above updates when it finishes." |
*
* @param {Admin_Builds_Sync_SlowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_slow = /** @type {((inputs?: Admin_Builds_Sync_SlowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_SlowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_slow(inputs)
	if (locale === "de") return de_admin_builds_sync_slow(inputs)
	if (locale === "fr") return fr_admin_builds_sync_slow(inputs)
	if (locale === "it") return it_admin_builds_sync_slow(inputs)
	if (locale === "nl") return nl_admin_builds_sync_slow(inputs)
	if (locale === "pl") return pl_admin_builds_sync_slow(inputs)
	if (locale === "pt") return pt_admin_builds_sync_slow(inputs)
	if (locale === "ru") return ru_admin_builds_sync_slow(inputs)
	if (locale === "sv") return sv_admin_builds_sync_slow(inputs)
	if (locale === "tr") return tr_admin_builds_sync_slow(inputs)
	if (locale === "zh") return zh_admin_builds_sync_slow(inputs)
	if (locale === "ja") return ja_admin_builds_sync_slow(inputs)
	return en_admin_builds_sync_slow(inputs)
});
